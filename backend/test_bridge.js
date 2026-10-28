const { executeAnalytics } = require('./src/services/pythonBridge');

async function runPython(action, payload) {
  return await executeAnalytics(action, payload);
}

async function main() {
  console.log("Testing Python health via Node bridge...");
  const health = await runPython('health', {});
  console.log("Python Health:", health);

  console.log("Testing backtest via Node bridge...");
  const bt = await runPython('backtest', { symbol_a: 'GOLDM', symbol_b: 'GOLDGUINEA', lookback_window: 30 });
  console.log("Backtest Status:", bt.status, "Total Trades:", bt.metrics?.total_trades, "Win Rate:", bt.metrics?.win_rate_pct + "%");
}

main().catch(console.error);
