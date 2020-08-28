import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { Children } from "../../typings/types";

const MotionLayout: React.FC<Children> = ({
	children
}: Children): JSX.Element => {
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 0.2 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default MotionLayout;
