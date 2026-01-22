import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Top bar hide
        tabBarStyle: { display: 'none' }, // Bottom bar/buttons hide
      }}>
      <Tabs.Screen name="index" />
      {/* 'two' wali screen yahan se khud hi gayab ho jayegi delete karne par */}
    </Tabs>
  );
}