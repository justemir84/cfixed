import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";

interface State {
  hasError: boolean;
  errorMessage: string;
}

/**
 * Uygulama ilk render sırasında hata fırlatırsa splash screen'i kapatır
 * ve kullanıcıya bilgi verir. Bu olmadan herhangi bir render hatası =
 * sonsuz splash screen takılması.
 */
export class SplashErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error?.message ?? "Bilinmeyen hata" };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[SplashErrorBoundary] Render hatası:", error);
    console.error("[SplashErrorBoundary] Component stack:", info.componentStack);
    // Hata olsa bile splash'i kapat — yoksa sonsuza dek takılı kalır
    SplashScreen.hideAsync().catch(() => {});
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            backgroundColor: "#ffffff",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ef4444",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Uygulama Başlatılamadı
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#6b7280",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            {this.state.errorMessage}
          </Text>
          <TouchableOpacity
            onPress={this.handleRetry}
            style={{
              backgroundColor: "#6366f1",
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#ffffff", fontWeight: "600" }}>Tekrar Dene</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}
