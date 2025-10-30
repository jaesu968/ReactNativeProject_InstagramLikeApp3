# ReactNativeProject_InstagramLikeApp3

Make an Instagram App (Part Three) - Woofstagram

In this project, we set up a complete navigational structure for our Woofstagram app, combining everything from the navigation lesson: from programmatic navigation to nested navigators, along with a production-grade authentication system.

## Project Overview

This project covers a couple of key things:

- Setting up React Navigation with Stack and Tab navigators
- Creating a stack navigator for sign in and sign up screens
- Creating a tab navigator for the main navigation
- Using programmatic navigation to go to the main navigation
- **[NEW] Implementing Context API for state management**
- **[NEW] Building a custom authentication hook**
- **[NEW] Adding sign out functionality**

---

## 📚 Educational Concepts Learned

### 1. **React Context API**
The Context API allows us to pass data (state and functions) through the component tree without prop drilling. This is especially useful for authentication state that needs to be accessible from any component.

**Key Concepts:**
- `createContext()` - Creates a context container
- `useContext()` - Consumes context values in components
- Context Provider - Wraps the app to provide auth data to all children

### 2. **Custom Hooks Pattern**
Created a custom `useAuth()` hook as a convenience wrapper around `useContext(AuthContext)`. This provides:
- Cleaner syntax in components
- Error handling if used outside the provider
- Single source of truth for auth logic

```javascript
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
