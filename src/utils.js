export function hexToRGB(hex){
    if(!hex)
        return [255,255,255]
    return hex.match(/.{1,2}/g).map(str => parseInt(str,16))
}

export function RGBtoHex(rgb){
    let hex = rgb.map(e => e.toString(16).padStart(2,'0'))
    return hex
}

export function foreColor(rgb){
    const RED_LUMINANCE = 299;
    const GREEN_LUMINANCE = 587;
    const BLUE_LUMINANCE = 114;
    const MAX = (RED_LUMINANCE * 255 + GREEN_LUMINANCE * 255 + BLUE_LUMINANCE * 255);
    const MID = MAX / 2;
    const [r,g,b] = rgb

    const totalCustomBrightness = r *RED_LUMINANCE + g*GREEN_LUMINANCE + b*BLUE_LUMINANCE;

    if (totalCustomBrightness <= MID)
        return [256,256,256];
    else
        return [0,0,0];
}

