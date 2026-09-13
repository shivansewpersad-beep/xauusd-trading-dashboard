import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const COLORS = {
  background: '#0F172A',
  card: '#1E293B',
  border: '#334155',
  text: '#E2E8F0',
  textMuted: '#94A3B8',
  accent: '#FCD34D',
  bullish: '#10B981',
  bearish: '#EF4444',
};

const Dashboard: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMarketData = async () => {
    try {
      // Mock data - replace with real API calls
      const data: MarketData[] = [
        { symbol: 'XAUUSD', price: 2034.50, change: 0.84, changePercent: 0.04 },
        { symbol: 'DXY', price: 103.85, change: -0.12, changePercent: -0.12 },
        { symbol: 'USOIL', price: 78.40, change: 0.97, changePercent: 1.24 },
        { symbol: 'US10Y', price: 4.22, change: 0.01, changePercent: 0.24 },
      ];
      setMarketData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching market data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 3000);
    return () => clearInterval(interval);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchMarketData();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.accent} />}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>XAUUSD Precision Lab</Text>
        <Text style={styles.subtitle}>Trading Dashboard v1.0</Text>
      </View>

      {/* Market Ticker */}
      <View style={styles.tickerContainer}>
        {marketData.map((item) => (
          <View key={item.symbol} style={styles.tickerCard}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={[styles.change, { color: item.change >= 0 ? COLORS.bullish : COLORS.bearish }]}>
              {item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
            </Text>
          </View>
        ))}
      </View>

      {/* Scanner Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SMC Precision Scanner</Text>
        <View style={styles.scannerCard}>
          <View style={styles.setupHeader}>
            <View style={[styles.badge, { backgroundColor: COLORS.bullish + '30' }]}>
              <Text style={[styles.badgeText, { color: COLORS.bullish }]}>BULLISH</Text>
            </View>
            <Text style={styles.timeframe}>15m / 5m</Text>
          </View>
          <Text style={styles.setupTitle}>Asia Low Sweep + 5m CHoCH</Text>
          <Text style={styles.setupDetail}>Trigger: $2032.00 | SL: $2026.50 | TP: $2045.00</Text>
          <Text style={[styles.confidence, { color: COLORS.bullish }]}>Confidence: 94%</Text>
        </View>
      </View>

      {/* Correlations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Intermarket Correlations</Text>
        <View style={styles.correlationCard}>
          <View style={styles.correlationRow}>
            <Text style={styles.correlationLabel}>Gold / DXY</Text>
            <Text style={[styles.correlationValue, { color: COLORS.bearish }]}>-0.88</Text>
          </View>
          <View style={styles.correlationRow}>
            <Text style={styles.correlationLabel}>Gold / Oil</Text>
            <Text style={[styles.correlationValue, { color: COLORS.bullish }]}>+0.74</Text>
          </View>
          <View style={styles.correlationRow}>
            <Text style={styles.correlationLabel}>Gold / US10Y</Text>
            <Text style={[styles.correlationValue, { color: COLORS.bearish }]}>-0.65</Text>
          </View>
        </View>
      </View>

      {/* Risk Calculator */}
      <View style={[styles.section, { marginBottom: 40 }]}>
        <Text style={styles.sectionTitle}>Position Sizing</Text>
        <View style={styles.riskCard}>
          <View style={styles.riskRow}>
            <Text style={styles.riskLabel}>Account Equity</Text>
            <Text style={styles.riskValue}>$100,000</Text>
          </View>
          <View style={styles.riskRow}>
            <Text style={styles.riskLabel}>Risk Tolerance</Text>
            <Text style={styles.riskValue}>1.0%</Text>
          </View>
          <View style={styles.riskRow}>
            <Text style={styles.riskLabel}>Max Risk</Text>
            <Text style={[styles.riskValue, { color: COLORS.bearish }]}>$1,000</Text>
          </View>
          <View style={styles.riskRow}>
            <Text style={styles.riskLabel}>Lot Size</Text>
            <Text style={[styles.riskValue, { color: COLORS.accent }]}>0.76</Text>
          </View>
          <View style={styles.riskRow}>
            <Text style={styles.riskLabel}>R:R Ratio</Text>
            <Text style={[styles.riskValue, { color: COLORS.bullish }]}>1 : 6.50</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.accent,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  tickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    gap: 8,
  },
  tickerCard: {
    flex: 1,
    minWidth: '48%',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  symbol: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.accent,
    marginBottom: 4,
  },
  change: {
    fontSize: 12,
    fontWeight: '700',
  },
  section: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  scannerCard: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.accent + '50',
    borderRadius: 12,
    padding: 12,
  },
  setupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  timeframe: {
    fontSize: 10,
    color: COLORS.textMuted,
    fontFamily: 'Menlo',
  },
  setupTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  setupDetail: {
    fontSize: 11,
    color: COLORS.textMuted,
    fontFamily: 'Menlo',
    marginBottom: 8,
  },
  confidence: {
    fontSize: 12,
    fontWeight: '700',
  },
  correlationCard: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  correlationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  correlationLabel: {
    fontSize: 12,
    color: COLORS.text,
  },
  correlationValue: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Menlo',
  },
  riskCard: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  riskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  riskLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  riskValue: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    fontFamily: 'Menlo',
  },
});

export default Dashboard;
