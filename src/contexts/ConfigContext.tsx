import { createContext, ReactNode } from 'react';

import defaultConfig from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

import { CustomizationProps } from 'types/config';

const initialState: CustomizationProps = {
    ...defaultConfig
};

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
    children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
    const [config] = useLocalStorage('tickettutors-config', {
        fontFamily: initialState.fontFamily,
        borderRadius: initialState.borderRadius,
        outlinedFilled: initialState.outlinedFilled,
        navType: initialState.navType,
        presetColor: initialState.presetColor,
        locale: initialState.locale
    });

    return (
        <ConfigContext.Provider
            value={{
                ...config
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export { ConfigProvider, ConfigContext };
