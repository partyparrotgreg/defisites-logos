export interface Protocol {
  id: string
  name: string
  address: string | null
  symbol: string
  url: string
  referralUrl?: string
  description: string
  chain: string
  logo: string
  audits: string
  audit_note: string | null
  gecko_id: string | null
  cmcId: string | null
  category: string
  chains: string[]
  module: string
  treasury?: string
  twitter: string
  audit_links?: string[]
  openSource?: boolean
  governanceID?: string[]
  github?: string[]
  hallmarks?: Array<[number, string]>
  forkedFrom: string[]
  oracles: string[]
  listedAt: number
  methodology: string
  slug: string
  tvl: number
  chainTvls: ChainTVLs
  change_1h: number
  change_1d: number
  change_7d: number
  tokenBreakdowns: Record<string, unknown>
  mcap: number | null
}

export type ChainTVLs = Record<string, number>
