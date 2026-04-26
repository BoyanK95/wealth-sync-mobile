# 📱 WealthSync Mobile

**WealthSync Mobile** is an all-in-one financial portfolio app built with Expo + React Native. It allows users to connect multiple stock trading platforms, track investments in real time, and gain powerful insights into their financial performance — all from a single, unified interface.

---

## 🚀 Features

* 🔗 **Multi-Platform Integration**

  * Connect multiple stock brokers and exchanges in one place
  * Aggregate all your assets into a single portfolio view

* 📊 **Portfolio Tracking**

  * Real-time portfolio value updates
  * Track gains, losses, and asset allocation

* 📈 **Analytics & Insights**

  * Performance charts
  * Historical data visualization
  * Investment breakdowns

* 🔐 **Secure Authentication**

  * Token-based authentication
  * Secure storage using AsyncStorage / SecureStore

* 🌍 **Multi-language Support**

  * i18n powered (English, Bulgarian, more coming)
  * Device-based language detection

* 📱 **Mobile-first Experience**

  * Built with React Native + Expo
  * Smooth, responsive UI with NativeWind

---

## 🏗️ Tech Stack

* **Framework:** Expo (React Native)
* **Navigation:** Expo Router
* **Styling:** NativeWind (Tailwind for RN)
* **State Management:** React Context API
* **Authentication:** Custom Auth Service (JWT-based)
* **Internationalization:** i18next + react-i18next
* **Storage:** AsyncStorage
* **Icons:** Lucide / Expo Vector Icons

---

## 📂 Project Structure

```
app/                # Expo Router screens
components/         # Reusable UI components
context/            # Global state (Auth, Translation, etc.)
services/           # API and business logic
hooks/              # Custom hooks
i18n/               # Localization setup & translations
assets/             # Images, fonts, static files
constants/          # App constants (routes, config)
```

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/wealthsync-mobile.git

# Navigate to project
cd wealthsync-mobile

# Install dependencies
npm install

# Start development server
npx expo start
```

---

## 📱 Running the App

* 📲 **iOS Simulator:** Press `i`
* 🤖 **Android Emulator:** Press `a`
* 📷 **Physical Device:** Scan QR with Expo Go

---

## 🔑 Environment Setup

Create a `.env` file in the root:

```env
API_URL=https://your-api-url.com
```

---

## 🔐 Authentication Flow

* User logs in → receives JWT token
* Token stored locally (AsyncStorage)
* App restores session on startup
* AuthContext manages global auth state

---

## 🌐 Internationalization

* Supports multiple languages via `i18next`
* Language persisted in AsyncStorage
* Auto-detects device language

Example usage:

```ts
const { t } = useTranslation();

t("IntroductionSection.title");
```

---

## 🧠 Future Roadmap

* 🔄 Real-time WebSocket updates
* 🏦 More broker integrations (e.g., Binance, eToro, Interactive Brokers)
* 📊 Advanced analytics (Sharpe ratio, risk metrics)
* 🧾 Transaction history & filtering
* 🤖 AI-powered investment insights
* 🔔 Notifications & alerts

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Create a new branch
git checkout -b feature/your-feature

# Commit your changes
git commit -m "Add feature"

# Push and open PR
git push origin feature/your-feature
```

---

## 📄 License

MIT License

---

## 💡 Vision

WealthSync aims to simplify personal investing by eliminating fragmentation across platforms and providing a single source of truth for your financial life.

---

## 👨‍💻 Author

Built with focus on performance, scalability, and clean architecture.

---

## ⭐ Support

If you like the project, consider giving it a star ⭐
Ï
