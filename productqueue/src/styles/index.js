import styled from 'styled-components'
import {lam_Red, lam_DarkBlue, lam_Blue, lam_LightBlue, lam_Grey} from './variables';
// App level components
export const AppComp = styled.div`
padding: 4px;
`;

export const Nav = styled.div`
padding: 4px;
display: flex;
justify-content:space-around;
flex-wrap: wrap;
p {
    color: ${lam_Grey};
    padding: 5px;
}
`;

export let navLink = styled.a`
color: red;
padding: 5px;
`;

export const HeaderComp = styled.div`
background: ${lam_Grey};
box-shadow: 10px 5px 5px ${lam_Grey};
padding: 4px;
display: flex;
flex-wrap: wrap;
h2{

    color:White;
}
p {
    background:black;
    color: white;
    border: 1px solid grey;
    border-radius:4px;
    height:25px;
    margin: 5px;
    padding: 4px;
}
`;

export const DashBoardComp = styled.div`
padding: 4px;
`;

export const SettingsComp = styled.div`
width:85%;
margin:10px auto;
padding: 4px;
p{
    margin:20px 30px;
}
`;

export const Button = styled.button`
background:black;
color: white;
border: 1px solid grey;
height:40px;
width: 120px;
margin: 5px;
padding: 4px;
`;

export const CircleBtn = styled.button`
background:black;
color: white;
border: 1px solid grey;
border-radius:20px;
height:25px;
width: 25px;
margin: 5px;
padding: 4px;
`;

export const Form = styled.form`
width: 300px;
border: 1px solid grey;
padding: 4px;
h3 { 
 color:blue;
}
`;

export const FormGroup = styled.div`
border: 1px solid purple;
padding: 4px;
`;

export const Input = styled.input`
border: 1px solid orange;
padding: 4px;
`;

export const ValueCard = styled.div`
display:flex;
justify-content: space-around;
border: 1px solid purple;
padding: 4px;
`;

export const ProjectCard = styled.div`
display:flex;
justify-content: space-around;
border: 1px solid purple;
padding: 4px;
`;