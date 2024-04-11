import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react';

export type MessageState = {};

const MessageContext = createContext<MessageState | undefined>(undefined);

type MessageProviderProps = PropsWithChildren & {};

export const MessageProvider: FC<MessageProviderProps> = ({ children }) => {
  const value = useMemo(() => ({}), []);
  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

const useMessages = (): MessageState => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return context;
};

export default useMessages;
