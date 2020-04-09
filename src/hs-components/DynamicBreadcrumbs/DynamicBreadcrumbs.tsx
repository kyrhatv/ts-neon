import * as React from 'react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './style.css';

export interface breadCrumbsProps {
    struct: CrumbOption[];
    folder: string[];
}

export interface CrumbOption {
    key: string;
    link: string;
    children: BreadItem[] | null;
}

export interface BreadItem {
    key: string;
    link: string;
}

export const DynamicBreadcrumbs: FunctionComponent<breadCrumbsProps> = ({ folder }) => {
    const [t] = useTranslation();

    let path = '';
    return (
        <>
            <nav aria-label="breadcrumb" style={{ backgroundColor: '#282c34' }}>
                <ol className="breadcrumb" style={{ backgroundColor: '#282c34' }}>
                    {folder.map((navOption) => {
                        path !== navOption ? (path = path + '/' + navOption) : (path = navOption);
                        return (
                            <li className="breadcrumb-item" key={path}>
                                <a className="breadcrumbs-link" href={path}>
                                    {t(navOption)}
                                </a>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};
