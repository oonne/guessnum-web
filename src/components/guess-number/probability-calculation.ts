/**
 * 计算玩家尝试次数战胜其他玩家的比例
 *
 * 算法原理（基于实际人类行为）：
 * 1. 人类玩家的策略分布：
 *    - 约20%的玩家掌握二分查找或类似高效策略
 *    - 约60%的玩家使用半随机策略（有一定逻辑但不够优化）
 *    - 约20%的玩家使用完全随机或线性搜索策略
 *
 * 2. 尝试次数分布模型：
 *    - 最少：1次（极少数幸运玩家）
 *    - 理论最优：⌈log₂(n)⌉次（掌握二分查找的玩家）
 *    - 平均水平：约range/3次（大部分玩家的表现）
 *    - 最差情况：接近range次（使用线性搜索的玩家）
 *
 * 3. 使用分段函数模拟真实分布：
 *    - 1次：战胜99%玩家（极其幸运）
 *    - ≤理论最优：战胜85-95%玩家（优秀策略）
 *    - ≤平均水平：战胜40-85%玩家（中等表现）
 *    - ≤最差合理范围：战胜5-40%玩家（较差表现）
 *    - >最差合理范围：战胜0-5%玩家（极差表现）
 *
 * @param range 猜测的数字范围（如：猜测1~100的数字，传入100）
 * @param attempts 玩家的尝试次数
 * @returns 战胜其他玩家的百分比（0-100）
 */
export function calculateWinPercentage(range: number, attempts: number): number {
  // 输入验证
  if (range <= 0 || attempts <= 0) {
    return 0;
  }

  // 计算关键阈值
  const optimalAttempts = Math.ceil(Math.log2(range)); // 理论最优次数
  const averageAttempts = Math.ceil(range / 3); // 平均玩家表现
  const worstReasonableAttempts = Math.ceil(range * 0.8); // 最差合理范围

  let winPercentage: number;

  if (attempts === 1) {
    // 1次猜中：极其幸运，战胜100%玩家
    winPercentage = 100;
  } else if (attempts <= optimalAttempts) {
    // 理论最优范围内：优秀策略，战胜85-95%玩家
    // 从95%线性递减到85%
    const progressRatio = (attempts - 1) / (optimalAttempts - 1);
    winPercentage = 95 - progressRatio * 10;
  } else if (attempts <= averageAttempts) {
    // 平均水平范围：中等表现，战胜40-85%玩家
    // 从85%线性递减到40%
    const progressRatio = (attempts - optimalAttempts) / (averageAttempts - optimalAttempts);
    winPercentage = 85 - progressRatio * 45;
  } else if (attempts <= worstReasonableAttempts) {
    // 较差但合理范围：战胜5-40%玩家
    // 从40%线性递减到5%
    const progressRatio =
      (attempts - averageAttempts) / (worstReasonableAttempts - averageAttempts);
    winPercentage = 40 - progressRatio * 35;
  } else if (attempts <= range) {
    // 极差表现：战胜0-5%玩家
    // 从5%线性递减到0%
    const progressRatio = (attempts - worstReasonableAttempts) / (range - worstReasonableAttempts);
    winPercentage = 5 - progressRatio * 5;
  } else {
    // 超过最大可能次数：战胜0%玩家
    winPercentage = 0;
  }

  // 确保结果在0-100范围内，并保留2位小数
  return Math.max(0, Math.min(100, Math.round(winPercentage * 100) / 100));
}

/**
 * 获取给定范围的理论最优尝试次数
 *
 * @param range 猜测的数字范围
 * @returns 理论最优尝试次数
 */
export function getOptimalAttempts(range: number): number {
  return Math.ceil(Math.log2(range));
}

/**
 * 获取给定范围的平均玩家尝试次数
 *
 * @param range 猜测的数字范围
 * @returns 平均玩家尝试次数
 */
export function getAverageAttempts(range: number): number {
  return Math.ceil(range / 3);
}

/**
 * 获取尝试次数的评价等级和描述
 *
 * @param range 猜测的数字范围
 * @param attempts 玩家的尝试次数
 * @returns 包含等级和描述的对象
 */
export function getPerformanceLevel(
  range: number,
  attempts: number,
): {
  level: string;
  description: string;
  winPercentage: number;
} {
  const winPercentage = calculateWinPercentage(range, attempts);
  const optimalAttempts = getOptimalAttempts(range);

  let level: string;
  let description: string;

  if (attempts === 1) {
    level = 'legendary';
    description = '一次猜中！极其幸运！';
  } else if (attempts <= optimalAttempts) {
    level = 'excellent';
    description = '策略优秀，接近理论最优！';
  } else if (winPercentage >= 70) {
    level = 'good';
    description = '表现良好，超越大部分玩家！';
  } else if (winPercentage >= 40) {
    level = 'average';
    description = '中等水平，还有提升空间。';
  } else if (winPercentage >= 10) {
    level = 'poor';
    description = '表现较差，建议学习更好的策略。';
  } else {
    level = 'terrible';
    description = '表现很差，需要大幅改进策略。';
  }

  return { level, description, winPercentage };
}
