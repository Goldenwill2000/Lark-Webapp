type EventCallback = (data: any) => void;

export type LoadingProps = {
  showLoading: boolean;
  description?: string;
};

export const EventBus = {
  on(event: string, callback: EventCallback) {
    document.addEventListener(event, (e: Event) => {
      const customEvent = e as CustomEvent;
      callback(customEvent.detail);
    });
  },
  dispatch(event: string, data: any) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: string, callback: EventCallback) {
    document.removeEventListener(event, callback as EventListener);
  },
};

export const ShowLoading = (message?: string) => {
  EventBus.dispatch("loading", { showLoading: true, description: message });
};

export const HideLoading = () => {
  EventBus.dispatch("loading", { showLoading: false, description: "" });
};

export const ShowDialog = (dialogPack: any) => {
  EventBus.dispatch("dialog", dialogPack);
};

export const HideDialog = () => {
  EventBus.dispatch("dialog", {});
};
