import { Composition } from "remotion";
import { HelloWorld, helloWorldCompSchema } from "./HelloWorld";
import { AllGpu } from "./AllGpu";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
    <Composition
				id="Scene"
				component={AllGpu}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{}}
			/>
      
    </>
  );
};
