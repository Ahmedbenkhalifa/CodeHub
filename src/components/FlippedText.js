import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { maxString } from "../utils/strings";

const FlippedText = ({ words, duration }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        backgroundColor: "rgba(255,0,0,0.7)",
        borderRadius: "8px",
        px: 1,
        overflow: "hidden",
        verticalAlign: "top",
      }}
    >
      <span style={{ visibility: "hidden", opacity: 0 }}>
        {maxString(words)}
      </span>
      {words.map((elem, k) => (
        <motion.div
          key={k}
          initial={{ x: "-50%" }}
          animate={{ opacity: [0, 1, 1, 1, 0], y: [-60, 0, 0, 0, 60] }}
          transition={{
            repeat: Infinity,
            duration: duration,
            repeatDelay: (words.length - 1) * duration,
            delay: k * duration,
          }}
          style={{ position: "absolute", top: 0, left: "50%" }}
        >
          {elem}
        </motion.div>
      ))}
      {/* <motion.div
                initial={{ opacity: 1, x: "-50%", y: -60 }}
                animate={{  y: [-60, 0, 0, 0, 60] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
                style={{ position: "absolute", top: 0, left: "50%" }}
            >
                compétence
            </motion.div>
            <motion.div
                initial={{ opacity: 1, x: "-50%", y: -60 }}
                animate={{ opacity: [0, 1, 1, 1, 0], y: [-60, 0, 0, 0, 60] }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    repeatDelay: 1,
                    delay: 1.75,
                }}
                style={{ position: "absolute", top: 0, left: "50%" }}
            >
                carrière
            </motion.div> */}
    </Box>
  );
};

export default FlippedText;
