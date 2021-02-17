import styled from 'styled-components';
import cold from '../../assets/cold.jpg'

const Background = styled.section`
  background-image: url(${cold});
  background-size: cover;
  background-position: bottom;
  transition: .4s ease-out;
  `;

export default Background;

/* .app.warm {
  background-image: url('./assets/warm.jpg');
} */