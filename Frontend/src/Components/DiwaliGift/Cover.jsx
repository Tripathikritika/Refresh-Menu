import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    left: 0;
    top: 73px;
`;

const Image = styled.img`
    width: 100vw;
    max-height: 500px;
`;

const Cover = () => {
    return (
        <Div>
            <Image src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/e67af689-347e-4a1b-ba6b-784e6e10d483.png" alt="cover" />
        </Div>
    )
}

export default Cover;