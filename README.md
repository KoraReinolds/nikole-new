# Trade Nuxt Application

This application is designed to work with historical market data, allowing users to easily create and test their trading strategies.

## Local Data Fetching

One of the key features of this application is the ability to fetch and manage historical market data locally without using a server. This is achieved through the following components:

### 1. Local Binance API Client

The application includes a client-side implementation of the Binance API that allows fetching historical OHLCV (Open, High, Low, Close, Volume) data directly from the browser. This eliminates the need for a server to proxy these requests.

```typescript
// app/data/binance/local.ts
export const fetchHistoricalDataLocally = async (
  symbol: string,
  startDate: string,
  endDate: string,
  timeframe = "1m",
): Promise<OHLCVData[]> => {
  // Implementation details...
};
```

### 2. Local Storage with Dexie

All fetched data is stored in the browser's IndexedDB using Dexie, allowing for efficient storage and retrieval of large amounts of historical data.

```typescript
// app/data/db/dexie.ts
export async function createOHLCVData(
  data: OHLCVData[],
  symbol: string,
): Promise<any> {
  // Implementation details...
}
```

### 3. Smart Data Management

The system includes smart data management features:

- **Gap Detection**: Automatically detects gaps in the data and fetches only the missing parts
- **Efficient Aggregation**: Aggregates 1-minute candles to any timeframe on-the-fly
- **Local-First Approach**: Always checks local storage before making API requests

### 4. Seamless Integration

The application provides two ways to use local data fetching:

1. **Standalone Page**: A dedicated page at `/local-data` demonstrates the local data fetching functionality
2. **Main Interface Integration**: The main chart interface includes a toggle to switch between server-side and client-side data fetching

```typescript
// app/components/LocalOHLCVDataFetcher.vue
async function loadData(timeRange: TimeRange, symbol: string, timeframe: string = "1m") {
  // Implementation details...
}
```

The `LocalOHLCVDataFetcher` component is a drop-in replacement for the server-based `OHLCVDataFetcher`, allowing seamless switching between local and server data sources.

### 5. Composable for Easy Integration

A composable function `useLocalOHLCV` is provided for easy integration into any component:

```typescript
// app/composables/useLocalOHLCV.ts
export function useLocalOHLCV() {
  // Implementation details...
  
  return {
    isLoading,
    error,
    progress,
    data,
    fetchData,
    isDataAvailableLocally,
  };
}
```

## Tech Stack

- **Nuxt 4**: For project organization and various out-of-the-box features
- **Vue 3.5**: Using vapor mode and composition API
- **Nuxt UI and Tailwind CSS**: For styling
- **TypeScript**: For type safety
- **Dexie**: For local storage to reduce server load
- **Lightweight-charts**: For charting

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to the Local Data page to try out the local data fetching functionality

## File Structure

- `app/` - Frontend part of the application
- `app/composables/` - Composables for reusable logic
- `app/components/` - Reusable components
- `app/pages/` - Application pages
- `app/types/` - Data types
- `app/data/` - Logic for data handling (Binance, local storage)
- `app/data/indicators/` - Logic for indicators
- `app/lib/` - Utility functions for reuse
