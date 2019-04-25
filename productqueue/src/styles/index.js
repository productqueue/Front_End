import styled from 'styled-components'
import {lam_Red, lam_Blue, lam_LightBlue, lam_Grey} from './variables';
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

export const HeaderComp = styled.div`
background: ${lam_Grey};
box-shadow: 10px 5px 5px ${lam_Grey};
padding: 4px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
h2{
    text-decoration-line: ;
    color:White;
}
p {
    background: ${lam_Red};
    color: white;
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
background: ${lam_Red};
color: white;
height:40px;
width: 120px;
margin: 5px;
padding: 4px;

:hover{
    border: 3px solid grey;
}
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
display: flex;
flex-wrap: wrap;
width: 300px;
padding: 4px;
h3 { 
 color:blue;
}
`;

export const FormGroup = styled.div`
width: 400px;
margin: 100px auto;
border: 1px solid ${lam_Blue};
background: ${lam_LightBlue};
padding: 4px;
:hover {
    border: 2px solid ${lam_Blue};
}
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