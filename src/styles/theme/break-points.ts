import { StringArrayExt } from "./types";

const breakPoints = ["600px", "900px", "1200px", "1800px"] as StringArrayExt;

breakPoints.sm = breakPoints[0];
breakPoints.md = breakPoints[1];
breakPoints.lg = breakPoints[2];
breakPoints.xl = breakPoints[3];

export default breakPoints;
