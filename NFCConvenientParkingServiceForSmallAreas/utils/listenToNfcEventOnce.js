import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

export const listenToNfcEventOnce = () => {
  const cleanUp = () => {
    NfcManager.unregisterTagEvent();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  return new Promise(resolve => {
    NfcManager.start();
    let tagFound = null;

    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      tagFound = tag;
      resolve(tagFound);
      NfcManager.unregisterTagEvent();
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      cleanUp();
      console.log('End waiting tag');
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
};
