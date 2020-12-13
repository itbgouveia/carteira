import React, { useMemo} from 'react';
import Toggle from '../Toggle';
import { Container,Profile, Welcome, UserName} from './styles';
import emojis from '../../utils/emojis';

const MainHeader: React.FC = () =>{
    const emoji = useMemo(()=>{
        const indice = Math.floor(Math.random() * 4);
        return emojis[indice];
    },[]);
    return(
        <Container>
            <Toggle/>
            <Profile>
            <Welcome>Olá,{emoji}</Welcome>
            <UserName>Itamar Gouveia</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;