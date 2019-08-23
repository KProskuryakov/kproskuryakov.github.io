import { gl } from "./gl";

const shaderSourceMap = new Map<string, string>();

async function fetchShaderSource(path: string) {
    const existingSource = shaderSourceMap.get(path);
    if (existingSource) {
        return existingSource;
    }
    const response = await window.fetch(path);
    const newSource = await response.text();
    shaderSourceMap.set(path, newSource);
    return newSource;
}

export class Shader {
    constructor(private program: WebGLProgram) {}

    public use() {
        gl.useProgram(this.program);
    }
    public setFloat(uniform: string, value: number) {
        gl.uniform1f(gl.getUniformLocation(this.program, uniform), value);
    }
}

export async function getShader(vPath: string, fPath: string) {
    const [vSource, fSource] = await Promise.all([fetchShaderSource(vPath), fetchShaderSource(fPath)]);
    console.log(vSource);
    const program = makeShaderProgram(vSource, fSource);
    return new Shader(program);
}

function makeShaderProgram(vSource: string, fSource: string) {
    const vShader = compileShader(gl.VERTEX_SHADER, vSource);
    const fShader = compileShader(gl.FRAGMENT_SHADER, fSource);
    const program = gl.createProgram()!;

    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    if (gl.getProgramParameter(program, gl.LINK_STATUS) !== 0) {
        console.error(gl.getProgramInfoLog(program));
    }

    gl.deleteShader(vShader);
    gl.deleteShader(fShader);

    return program;
}

function compileShader(xtype: number, source: string) {
    const shader = gl.createShader(xtype)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) !== 0) {
        console.error(gl.getShaderInfoLog(shader));
    }
    return shader;
}
