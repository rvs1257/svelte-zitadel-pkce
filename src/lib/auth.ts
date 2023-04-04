import { UserManager, WebStorageStateStore, User } from "oidc-client-ts";
import { goto } from "$app/navigation";
import { isAuthenticated, user } from "./stores";
import { browser } from "$app/environment";

let userManager: UserManager;

if (browser) {
  const config = {
    authority: "{ISSUER}", // At Zitadel Project Console > [Your project] > [Your application] > URLs - Issuer
    client_id: "{CLIENT_ID}", // At Zitadel Project Console > [Your project] > [Your application] > Configuration - Client ID
    redirect_uri: "http://localhost:3000/callback",
    response_type: "code",
    scope: "openid profile email",
    post_logout_redirect_uri: "http://localhost:3000/",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    silent_redirect_uri: "http://localhost:3000/silent-refresh",
  };

  userManager = new UserManager(config);

  userManager.events.addUserLoaded((loadedUser: User) => {
    console.log('userManager.events.addUserLoaded');
    user.set(loadedUser);
    isAuthenticated.set(true);
  });

  userManager.events.addUserUnloaded(() => {
    console.log('userManager.events.addUserUnloaded');
    user.set(null);
    isAuthenticated.set(false);
  });
}

async function login(): Promise<void> {
  console.log('UserManager.login()');
  if (browser) {
    await userManager.signinRedirect();
  }
}

async function logout(): Promise<void> {
  if (browser) {
    await userManager.signoutRedirect();
  }
}

async function handleCallback(): Promise<void> {
  if (browser) {
    await userManager.signinRedirectCallback();
    goto("/");
  }
}

async function handleSilentCallback(): Promise<void> {
  if (browser) {
    await userManager.signinSilentCallback();
    goto("/");
  }
}

export { login, logout, handleCallback, handleSilentCallback };
