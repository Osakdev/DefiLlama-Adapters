const { sumTokensExport } = require('@defillama/sdk');

const OSAK = {
  ethereum:  '0xa21af1050f7b26e0cff45ee51548254c41ed6b5c',
  base:      '0xbfd5206962267c7b4b4a8b3d76ac2e1b2a5c4d5e',
  arbitrum:  '0xbfd5206962267c7b4b4a8b3d76ac2e1b2a5c4d5e',
  optimism:  '0xbfd5206962267c7b4b4a8b3d76ac2e1b2a5c4d5e',
  bsc:       '0x11cd72f7A4B699c67f225ca8aBb20bC9F8DB90c7',
  polygon:   '0x11cd72f7A4B699c67f225ca8aBb20bC9F8DB90c7',
  avalanche: '0x96E1056a8814De39c8c3Cd0176042d6ceCD807d7',
};

// LP Tokens 
const lpTokens = {
  base:      '0x086903c53057c96582b3075e3c0b1b570574a8fe',
  arbitrum:  '0xE67c34d25D9CA2Fc41824184309C6Fce9B0558c5',
  bsc:       '0x61F7620a747111678c5Fe83d822a0afd060Ba0F7',
  avalanche: '0xE67c34d25D9CA2Fc41824184309C6Fce9B0558c5',
  polygon:   '0xE67c34d25D9CA2Fc41824184309C6Fce9B0558c5',
  optimism:  '0x61F7620a747111678c5Fe83d822a0afd060Ba0F7',
};

module.exports = {
  misrepresentedTokens: true,
  methodology: `TVL counts $OSAK tokens locked across chains + value of OSAK LP tokens staked directly in the LP contracts at farms.osaka.win`,

  // Locked $OSAK (single token)
  ethereum:  { tvl: sumTokensExport({ owners: [OSAK.ethereum], tokens: [OSAK.ethereum] }) },
  base:      { tvl: sumTokensExport({ owners: [OSAK.base],      tokens: [OSAK.base] }) },
  arbitrum:  { tvl: sumTokensExport({ owners: [OSAK.arbitrum],  tokens: [OSAK.arbitrum] }) },
  optimism:  { tvl: sumTokensExport({ owners: [OSAK.optimism],  tokens: [OSAK.optimism] }) },
  bsc:       { tvl: sumTokensExport({ owners: [OSAK.bsc],       tokens: [OSAK.bsc] }) },
  polygon:   { tvl: sumTokensExport({ owners: [OSAK.polygon],   tokens: [OSAK.polygon] }) },
  avalanche: { tvl: sumTokensExport({ owners: [OSAK.avalanche], tokens: [OSAK.avalanche] }) },

  // Staked LP Farms (pool2) 
  base:      { pool2: sumTokensExport({ owners: [lpTokens.base],      tokens: [lpTokens.base] }) },
  arbitrum:  { pool2: sumTokensExport({ owners: [lpTokens.arbitrum],  tokens: [lpTokens.arbitrum] }) },
  bsc:       { pool2: sumTokensExport({ owners: [lpTokens.bsc],       tokens: [lpTokens.bsc] }) },
  avalanche: { pool2: sumTokensExport({ owners: [lpTokens.avalanche], tokens: [lpTokens.avalanche] }) },
  polygon:   { pool2: sumTokensExport({ owners: [lpTokens.polygon],   tokens: [lpTokens.polygon] }) },
  optimism:  { pool2: sumTokensExport({ owners: [lpTokens.optimism],  tokens: [lpTokens.optimism] }) },
};
