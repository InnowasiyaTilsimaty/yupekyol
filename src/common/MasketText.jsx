import PropTypes from "prop-types"
import { motion } from 'framer-motion';
import styled from "styled-components";
import { colors } from "../styles/vars";

const MasketText = ({text, enterDelay, backgroundColor }) => {
    const animation = {
        initial: {y: "100%"},
        enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i + enterDelay}})
      }

  return (
    <MasketTextStyles $backgroundColor={backgroundColor} >
    {
      text.map( (phrase, index) => {
        return <div key={index} className="lineMask">
          <motion.p custom={index} variants={animation} initial="initial" animate="enter">{phrase}</motion.p>
        </div>
      })
    }
  </MasketTextStyles>
  )
}

export default MasketText

MasketText.propTypes = {
    text: PropTypes.array,
    enterDelay: PropTypes.number,
    backgroundColor: PropTypes.string
}

const MasketTextStyles = styled.div`
    .lineMask{
  overflow: hidden;
}

.lineMask p{
  margin: 0px;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "none")};
}
`