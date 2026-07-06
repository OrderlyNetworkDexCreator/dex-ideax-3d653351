/** Orderly TradingPage localStorage key for horizontal/sidebar markets placement. */
export const ORDERLY_HORIZONTAL_MARKETS_LAYOUT_KEY =
  "orderly_horizontal_markets_layout";

export const DEFAULT_MARKET_LAYOUT = "top";

const MARKET_LAYOUT_MIGRATION_KEY = "idx_dex_default_market_layout_top_v1";

/** Apply IDX default: horizontal markets bar on top. */
export function applyDefaultTradingLayout() {
  if (typeof window === "undefined") return;

  const migrated = localStorage.getItem(MARKET_LAYOUT_MIGRATION_KEY);
  if (!migrated) {
    localStorage.setItem(
      ORDERLY_HORIZONTAL_MARKETS_LAYOUT_KEY,
      DEFAULT_MARKET_LAYOUT,
    );
    localStorage.setItem(MARKET_LAYOUT_MIGRATION_KEY, "1");
    return;
  }

  if (!localStorage.getItem(ORDERLY_HORIZONTAL_MARKETS_LAYOUT_KEY)) {
    localStorage.setItem(
      ORDERLY_HORIZONTAL_MARKETS_LAYOUT_KEY,
      DEFAULT_MARKET_LAYOUT,
    );
  }
}
