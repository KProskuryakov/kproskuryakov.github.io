import { setGL } from "./gl";
setGL("canvas-gl");
import { gl } from "./gl";

import { getShader } from "./Shaders";

const vertices = [
    // pos         colors
    0.5, 0.5, 0.0, 1.0, 0.0, 0.0, // top right
    0.5, -0.5, 0.0, 0.0, 1.0, 0.0, // bottom right
    -0.5, 0.5, 0.0, 0.0, 0.0, 1.0, // top left
];

const vertices2 = [
    0.5, -0.5, 0.0, 0.0, 1.0, 0.0, // bottom right
    -0.5, -0.5, 0.0, 1.0, 0.0, 0.0, // bottom left
    -0.5, 0.5, 0.0, 0.0, 0.0, 1.0, // top left
];

const vao1 = gl.createVertexArray();
gl.bindVertexArray(vao1);

const buf1 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buf1);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// set vertex attribute pointers
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
gl.enableVertexAttribArray(0)
// set color attribute pointers
gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
gl.enableVertexAttribArray(1);

const vao2 = gl.createVertexArray();
gl.bindVertexArray(vao2);

const buf2 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buf2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);

// set vertex attribute pointers
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
gl.enableVertexAttribArray(0);
// set color attribute pointers
gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
gl.enableVertexAttribArray(1);

gl.bindBuffer(gl.ARRAY_BUFFER, null);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
gl.bindVertexArray(null);

async function doRendering() {
    const shader1 = await getShader("/assets/webgl/shaders/v1.glsl", "/assets/webgl/shaders/f1.glsl");
    const shader2 = await getShader("/assets/webgl/shaders/v1.glsl", "/assets/webgl/shaders/f2.glsl");

    const render = (timestamp: number) => {
        gl.clearColor(0.2, 0.3, 0.3, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const greenVal = (Math.sin(timestamp / 1000) / 2.0) + 0.5;

        shader1.use();
        gl.bindVertexArray(vao1);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        shader2.use();
        shader2.setFloat("greenVal", greenVal);
        gl.bindVertexArray(vao2);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        window.requestAnimationFrame(render);
    };

    window.requestAnimationFrame(render);
}

doRendering();
