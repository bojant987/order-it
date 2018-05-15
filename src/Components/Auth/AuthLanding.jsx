import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import Logo from '../Shared/Logo';

export default class AuthLanding extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        clearFormStatus: PropTypes.func,
        pageClassName: PropTypes.string,
        className: PropTypes.string,
    };

    componentWillUnmount() {
        this.props.clearFormStatus();
    }

    render() {
        const {children, pageClassName, className} = this.props;

        return (
            <main
                className={`AuthLanding ${pageClassName}`}
            >
                <Logo/>
                <Container>
                    <div className={`AuthLanding__inner ${className}`}>
                        {children}
                    </div>
                </Container>
            </main>
        );
    }
}