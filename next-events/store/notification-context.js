import {createContext} from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {
  },
  hideNotification: function () {
  }
});

export function NotificationContextProvider(props) {
  return (
    <NotificationContextProvider>
      {props.children}
    </NotificationContextProvider>
  );
}

export default NotificationContext;