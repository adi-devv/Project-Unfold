(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.ogl = {}));
}(this, (function (exports) { 'use strict';

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }

    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */
    function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }

    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    }

    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
    }

    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
    }

    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
    }

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return x * x + y * y + z * z;
    }

    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return x * x + y * y + z * z;
    }

    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    }

    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
    }

    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    function normalize(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let len = x * x + y * y + z * z;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }

    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
        let ax = a[0],
            ay = a[1],
            az = a[2];
        let bx = b[0],
            by = b[1],
            bz = b[2];

        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
    }

    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */
    function lerp(out, a, b, t) {
        let ax = a[0];
        let ay = a[1];
        let az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
    }

    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
        let x = a[0],
            y = a[1],
            z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    }

    /**
     * Same as above but doesn't apply translation.
     * Useful for rays.
     */
    function scaleRotateMat4(out, a, m) {
        let x = a[0],
            y = a[1],
            z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
        return out;
    }

    /**
     * Transforms the vec3 with a quat
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */
    function transformQuat(out, a, q) {
        // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed

        let x = a[0],
            y = a[1],
            z = a[2];
        let qx = q[0],
            qy = q[1],
            qz = q[2],
            qw = q[3];

        let uvx = qy * z - qz * y;
        let uvy = qz * x - qx * z;
        let uvz = qx * y - qy * x;

        let uuvx = qy * uvz - qz * uvy;
        let uuvy = qz * uvx - qx * uvz;
        let uuvz = qx * uvy - qy * uvx;

        let w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2;

        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2;

        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
    }

    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */
    const angle = (function () {
        const tempA = [0, 0, 0];
        const tempB = [0, 0, 0];

        return function (a, b) {
            copy(tempA, a);
            copy(tempB, b);

            normalize(tempA, tempA);
            normalize(tempB, tempB);

            let cosine = dot(tempA, tempB);

            if (cosine > 1.0) {
                return 0;
            } else if (cosine < -1.0) {
                return Math.PI;
            } else {
                return Math.acos(cosine);
            }
        };
    })();

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }

    class Vec3 extends Array {
        constructor(x = 0, y = x, z = x) {
            super(x, y, z);
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        set x(v) {
            this[0] = v;
        }

        set y(v) {
            this[1] = v;
        }

        set z(v) {
            this[2] = v;
        }

        set(x, y = x, z = x) {
            if (x.length) return this.copy(x);
            set(this, x, y, z);
            return this;
        }

        copy(v) {
            copy(this, v);
            return this;
        }

        add(va, vb) {
            if (vb) add(this, va, vb);
            else add(this, this, va);
            return this;
        }

        sub(va, vb) {
            if (vb) subtract(this, va, vb);
            else subtract(this, this, va);
            return this;
        }

        multiply(v) {
            if (v.length) multiply(this, this, v);
            else scale(this, this, v);
            return this;
        }

        divide(v) {
            if (v.length) divide(this, this, v);
            else scale(this, this, 1 / v);
            return this;
        }

        inverse(v = this) {
            inverse(this, v);
            return this;
        }

        // Can't use 'length' as Array.prototype uses it
        len() {
            return length(this);
        }

        distance(v) {
            if (v) return distance(this, v);
            else return length(this);
        }

        squaredLen() {
            return squaredLength(this);
        }

        squaredDistance(v) {
            if (v) return squaredDistance(this, v);
            else return squaredLength(this);
        }

        negate(v = this) {
            negate(this, v);
            return this;
        }

        cross(va, vb) {
            if (vb) cross(this, va, vb);
            else cross(this, this, va);
            return this;
        }

        scale(v) {
            scale(this, this, v);
            return this;
        }

        normalize() {
            normalize(this, this);
            return this;
        }

        dot(v) {
            return dot(this, v);
        }

        equals(v) {
            return exactEquals(this, v);
        }

        applyMatrix4(mat4) {
            transformMat4(this, this, mat4);
            return this;
        }

        scaleRotateMatrix4(mat4) {
            scaleRotateMat4(this, this, mat4);
            return this;
        }

        applyQuaternion(q) {
            transformQuat(this, this, q);
            return this;
        }

        angle(v) {
            return angle(this, v);
        }

        lerp(v, t) {
            lerp(this, this, v, t);
            return this;
        }

        clone() {
            return new Vec3(this[0], this[1], this[2]);
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            return a;
        }

        transformDirection(mat4) {
            const x = this[0];
            const y = this[1];
            const z = this[2];

            this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
            this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
            this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

            return this.normalize();
        }
    }

    // attribute params

    const tempVec3 = new Vec3();

    let ID = 1;
    let ATTR_ID = 1;

    // To stop inifinite warnings
    let isBoundsWarned = false;

    class Geometry {
        constructor(gl, attributes = {}) {
            if (!gl.canvas) console.error('gl not passed as first argument to Geometry');
            this.gl = gl;
            this.attributes = attributes;
            this.id = ID++;

            // Store one VAO per program attribute locations order
            this.VAOs = {};

            this.drawRange = { start: 0, count: 0 };
            this.instancedCount = 0;

            // Unbind current VAO so that new buffers don't get added to active mesh
            this.gl.renderer.bindVertexArray(null);
            this.gl.renderer.currentGeometry = null;

            // Alias for state store to avoid redundant calls for global state
            this.glState = this.gl.renderer.state;

            // create the buffers
            for (let key in attributes) {
                this.addAttribute(key, attributes[key]);
            }
        }

        addAttribute(key, attr) {
            this.attributes[key] = attr;

            // Set options
            attr.id = ATTR_ID++; // TODO: currently unused, remove?
            attr.size = attr.size || 1;
            attr.type =
                attr.type ||
                (attr.data.constructor === Float32Array
                    ? this.gl.FLOAT
                    : attr.data.constructor === Uint16Array
                    ? this.gl.UNSIGNED_SHORT
                    : this.gl.UNSIGNED_INT); // Uint32Array
            attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
            attr.normalized = attr.normalized || false;
            attr.stride = attr.stride || 0;
            attr.offset = attr.offset || 0;
            attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
            attr.divisor = attr.instanced || 0;
            attr.needsUpdate = false;

            if (!attr.buffer) {
                attr.buffer = this.gl.createBuffer();

                // Push data to buffer
                this.updateAttribute(attr);
            }

            // Update geometry counts. If indexed, ignore regular attributes
            if (attr.divisor) {
                this.isInstanced = true;
                if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
                    console.warn('geometry has multiple instanced buffers of different length');
                    return (this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor));
                }
                this.instancedCount = attr.count * attr.divisor;
            } else if (key === 'index') {
                this.drawRange.count = attr.count;
            } else if (!this.attributes.index) {
                this.drawRange.count = Math.max(this.drawRange.count, attr.count);
            }
        }

        updateAttribute(attr) {
            if (this.glState.boundBuffer !== attr.buffer) {
                this.gl.bindBuffer(attr.target, attr.buffer);
                this.glState.boundBuffer = attr.buffer;
            }
            this.gl.bufferData(attr.target, attr.data, this.gl.STATIC_DRAW);
            attr.needsUpdate = false;
        }

        setIndex(value) {
            this.addAttribute('index', value);
        }

        setDrawRange(start, count) {
            this.drawRange.start = start;
            this.drawRange.count = count;
        }

        setInstancedCount(value) {
            this.instancedCount = value;
        }

        createVAO(program) {
            this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
            this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
            this.bindAttributes(program);
        }

        bindAttributes(program) {
            // Link all attributes to program using gl.vertexAttribPointer
            program.attributeLocations.forEach((location, { name, type }) => {
                // If geometry missing a required shader attribute
                if (!this.attributes[name]) {
                    console.warn(`active attribute ${name} not being supplied`);
                    return;
                }

                const attr = this.attributes[name];

                this.gl.bindBuffer(attr.target, attr.buffer);
                this.glState.boundBuffer = attr.buffer;

                // For matrix attributes, buffer needs to be defined per column
                let numLoc = 1;
                if (type === 35674) numLoc = 2; // mat2
                if (type === 35675) numLoc = 3; // mat3
                if (type === 35676) numLoc = 4; // mat4

                const size = attr.size / numLoc;
                const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
                const offset = numLoc === 1 ? 0 : numLoc * numLoc;

                for (let i = 0; i < numLoc; i++) {
                    this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
                    this.gl.enableVertexAttribArray(location + i);

                    // For instanced attributes, divisor needs to be set.
                    // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render
                    this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
                }
            });

            // Bind indices if geometry indexed
            if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
        }

        draw({ program, mode = this.gl.TRIANGLES }) {
            if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
                if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
                this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
                this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
            }

            // Check if any attributes need updating
            program.attributeLocations.forEach((location, { name }) => {
                const attr = this.attributes[name];
                if (attr.needsUpdate) this.updateAttribute(attr);
            });

            if (this.isInstanced) {
                if (this.attributes.index) {
                    this.gl.renderer.drawElementsInstanced(
                        mode,
                        this.drawRange.count,
                        this.attributes.index.type,
                        this.attributes.index.offset + this.drawRange.start * 2,
                        this.instancedCount
                    );
                } else {
                    this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
                }
            } else {
                if (this.attributes.index) {
                    this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
                } else {
                    this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
                }
            }
        }

        getPositionArray() {
            // Use position buffer, or min/max if available
            const attr = this.attributes.position;
            // if (attr.min) return [...attr.min, ...attr.max];
            if (attr.data) return attr.data;
            if (isBoundsWarned) return;
            console.warn('No position buffer data found to compute bounds');
            return (isBoundsWarned = true);
        }

        computeBoundingBox(array) {
            if (!array) array = this.getPositionArray();

            if (!this.bounds) {
                this.bounds = {
                    min: new Vec3(),
                    max: new Vec3(),
                    center: new Vec3(),
                    scale: new Vec3(),
                    radius: Infinity,
                };
            }

            const min = this.bounds.min;
            const max = this.bounds.max;
            const center = this.bounds.center;
            const scale = this.bounds.scale;

            min.set(+Infinity);
            max.set(-Infinity);

            // TODO: use offset/stride if exists
            // TODO: check size of position (eg triangle with Vec2)
            for (let i = 0, l = array.length; i < l; i += 3) {
                const x = array[i];
                const y = array[i + 1];
                const z = array[i + 2];

                min.x = Math.min(x, min.x);
                min.y = Math.min(y, min.y);
                min.z = Math.min(z, min.z);

                max.x = Math.max(x, max.x);
                max.y = Math.max(y, max.y);
                max.z = Math.max(z, max.z);
            }

            scale.sub(max, min);
            center.add(min, max).divide(2);
        }

        computeBoundingSphere(array) {
            if (!array) array = this.getPositionArray();
            if (!this.bounds) this.computeBoundingBox(array);

            let maxRadiusSq = 0;
            for (let i = 0, l = array.length; i < l; i += 3) {
                tempVec3.fromArray(array, i);
                maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
            }

            this.bounds.radius = Math.sqrt(maxRadiusSq);
        }

        remove() {
            if (this.vao) this.gl.renderer.deleteVertexArray(this.vao);
            for (let key in this.attributes) {
                this.gl.deleteBuffer(this.attributes[key].buffer);
                delete this.attributes[key];
            }
        }
    }

    // TODO: upload empty texture if null ? maybe not
    // TODO: upload identity matrix if null ?
    // TODO: sampler Cube

    let ID$1 = 1;

    // cache of typed arrays used to flatten uniform arrays
    const arrayCacheF32 = {};

    class Program {
        constructor(
            gl,
            {
                vertex,
                fragment,
                uniforms = {},

                transparent = false,
                cullFace = gl.BACK,
                frontFace = gl.CCW,
                depthTest = true,
                depthWrite = true,
                depthFunc = gl.LESS,
            } = {}
        ) {
            if (!gl.canvas) console.error('gl not passed as fist argument to Program');
            this.gl = gl;
            this.uniforms = uniforms;
            this.id = ID$1++;

            if (!vertex) console.warn('vertex shader not supplied');
            if (!fragment) console.warn('fragment shader not supplied');

            // Store program state
            this.transparent = transparent;
            this.cullFace = cullFace;
            this.frontFace = frontFace;
            this.depthTest = depthTest;
            this.depthWrite = depthWrite;
            this.depthFunc = depthFunc;
            this.blendFunc = {};
            this.blendEquation = {};

            // set default blendFunc if transparent flagged
            if (this.transparent && !this.blendFunc.src) {
                if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
                else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            }

            // compile vertex shader and log errors
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, vertex);
            gl.compileShader(vertexShader);
            if (gl.getShaderInfoLog(vertexShader) !== '') {
                console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
            }

            // compile fragment shader and log errors
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, fragment);
            gl.compileShader(fragmentShader);
            if (gl.getShaderInfoLog(fragmentShader) !== '') {
                console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
            }

            // compile program and log errors
            this.program = gl.createProgram();
            gl.attachShader(this.program, vertexShader);
            gl.attachShader(this.program, fragmentShader);
            gl.linkProgram(this.program);
            if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
                return console.warn(gl.getProgramInfoLog(this.program));
            }

            // Remove shader once linked
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);

            // Get active uniform locations
            this.uniformLocations = new Map();
            let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
            for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
                let uniform = gl.getActiveUniform(this.program, uIndex);
                this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));

                // split uniforms' names to separate array and struct declarations
                const split = uniform.name.match(/(\w+)/g);

                uniform.uniformName = split[0];

                if (split.length === 3) {
                    uniform.isStructArray = true;
                    uniform.structIndex = Number(split[1]);
                    uniform.structProperty = split[2];
                } else if (split.length === 2 && isNaN(Number(split[1]))) {
                    uniform.isStruct = true;
                    uniform.structProperty = split[1];
                }
            }

            // Get active attribute locations
            this.attributeLocations = new Map();
            const locations = [];
            const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
            for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
                const attribute = gl.getActiveAttrib(this.program, aIndex);
                const location = gl.getAttribLocation(this.program, attribute.name);
                locations[location] = attribute.name;
                this.attributeLocations.set(attribute, location);
            }
            this.attributeOrder = locations.join('');
        }

        setBlendFunc(src, dst, srcAlpha, dstAlpha) {
            this.blendFunc.src = src;
            this.blendFunc.dst = dst;
            this.blendFunc.srcAlpha = srcAlpha;
            this.blendFunc.dstAlpha = dstAlpha;
            if (src) this.transparent = true;
        }

        setBlendEquation(modeRGB, modeAlpha) {
            this.blendEquation.modeRGB = modeRGB;
            this.blendEquation.modeAlpha = modeAlpha;
        }

        applyState() {
            if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);
            else this.gl.renderer.disable(this.gl.DEPTH_TEST);

            if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);
            else this.gl.renderer.disable(this.gl.CULL_FACE);

            if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);
            else this.gl.renderer.disable(this.gl.BLEND);

            if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
            this.gl.renderer.setFrontFace(this.frontFace);
            this.gl.renderer.setDepthMask(this.depthWrite);
            this.gl.renderer.setDepthFunc(this.depthFunc);
            if (this.blendFunc.src)
                this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
            this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
        }

        use({ flipFaces = false } = {}) {
            let textureUnit = -1;
            const programActive = this.gl.renderer.currentProgram === this.id;

            // Avoid gl call if program already in use
            if (!programActive) {
                this.gl.useProgram(this.program);
                this.gl.renderer.currentProgram = this.id;
            }

            // Set only the active uniforms found in the shader
            this.uniformLocations.forEach((location, activeUniform) => {
                let name = activeUniform.uniformName;

                // get supplied uniform
                let uniform = this.uniforms[name];

                // For structs, get the specific property instead of the entire object
                if (activeUniform.isStruct) {
                    uniform = uniform[activeUniform.structProperty];
                    name += `.${activeUniform.structProperty}`;
                }
                if (activeUniform.isStructArray) {
                    uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
                    name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
                }

                if (!uniform) {
                    return warn(`Active uniform ${name} has not been supplied`);
                }

                if (uniform && uniform.value === undefined) {
                    return warn(`${name} uniform is missing a value parameter`);
                }

                if (uniform.value.texture) {
                    textureUnit = textureUnit + 1;

                    // Check if texture needs to be updated
                    uniform.value.update(textureUnit);
                    return setUniform(this.gl, activeUniform.type, location, textureUnit);
                }

                // For texture arrays, set uniform as an array of texture units instead of just one
                if (uniform.value.length && uniform.value[0].texture) {
                    const textureUnits = [];
                    uniform.value.forEach((value) => {
                        textureUnit = textureUnit + 1;
                        value.update(textureUnit);
                        textureUnits.push(textureUnit);
                    });

                    return setUniform(this.gl, activeUniform.type, location, textureUnits);
                }

                setUniform(this.gl, activeUniform.type, location, uniform.value);
            });

            this.applyState();
            if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
        }

        remove() {
            this.gl.deleteProgram(this.program);
        }
    }

    function setUniform(gl, type, location, value) {
        value = value.length ? flatten(value) : value;
        const setValue = gl.renderer.state.uniformLocations.get(location);

        // Avoid redundant uniform commands
        if (value.length) {
            if (setValue === undefined || setValue.length !== value.length) {
                // clone array to store as cache
                gl.renderer.state.uniformLocations.set(location, value.slice(0));
            } else {
                if (arraysEqual(setValue, value)) return;

                // Update cached array values
                setValue.set ? setValue.set(value) : setArray(setValue, value);
                gl.renderer.state.uniformLocations.set(location, setValue);
            }
        } else {
            if (setValue === value) return;
            gl.renderer.state.uniformLocations.set(location, value);
        }

        switch (type) {
            case 5126:
                return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
            case 35664:
                return gl.uniform2fv(location, value); // FLOAT_VEC2
            case 35665:
                return gl.uniform3fv(location, value); // FLOAT_VEC3
            case 35666:
                return gl.uniform4fv(location, value); // FLOAT_VEC4
            case 35670: // BOOL
            case 5124: // INT
            case 35678: // SAMPLER_2D
            case 35680:
                return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
            case 35671: // BOOL_VEC2
            case 35667:
                return gl.uniform2iv(location, value); // INT_VEC2
            case 35672: // BOOL_VEC3
            case 35668:
                return gl.uniform3iv(location, value); // INT_VEC3
            case 35673: // BOOL_VEC4
            case 35669:
                return gl.uniform4iv(location, value); // INT_VEC4
            case 35674:
                return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
            case 35675:
                return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
            case 35676:
                return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
        }
    }

    function addLineNumbers(string) {
        let lines = string.split('\n');
        for (let i = 0; i < lines.length; i++) {
            lines[i] = i + 1 + ': ' + lines[i];
        }
        return lines.join('\n');
    }

    function flatten(a) {
        const arrayLen = a.length;
        const valueLen = a[0].length;
        if (valueLen === undefined) return a;
        const length = arrayLen * valueLen;
        let value = arrayCacheF32[length];
        if (!value) arrayCacheF32[length] = value = new Float32Array(length);
        for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
        return value;
    }

    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0, l = a.length; i < l; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function setArray(a, b) {
        for (let i = 0, l = a.length; i < l; i++) {
            a[i] = b[i];
        }
    }

    let warnCount = 0;
    function warn(message) {
        if (warnCount > 100) return;
        console.warn(message);
        warnCount++;
        if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
    }

    // TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

    // Not automatic - devs to use these methods manually
    // gl.colorMask( colorMask, colorMask, colorMask, colorMask );
    // gl.clearColor( r, g, b, a );
    // gl.stencilMask( stencilMask );
    // gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
    // gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
    // gl.clearStencil( stencil );

    const tempVec3$1 = new Vec3();
    let ID$2 = 1;

    class Renderer {
        constructor({
            canvas = document.createElement('canvas'),
            width = 300,
            height = 150,
            dpr = 1,
            alpha = false,
            depth = true,
            stencil = false,
            antialias = false,
            premultipliedAlpha = false,
            preserveDrawingBuffer = false,
            powerPreference = 'default',
            autoClear = true,
            webgl = 2,
        } = {}) {
            const attributes = { alpha, depth, stencil, antialias, premultipliedAlpha, preserveDrawingBuffer, powerPreference };
            this.dpr = dpr;
            this.alpha = alpha;
            this.color = true;
            this.depth = depth;
            this.stencil = stencil;
            this.premultipliedAlpha = premultipliedAlpha;
            this.autoClear = autoClear;
            this.id = ID$2++;

            // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
            if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
            this.isWebgl2 = !!this.gl;
            if (!this.gl) {
                this.gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
            }
            if (!this.gl) console.error('unable to create webgl context');

            // Attach renderer to gl so that all classes have access to internal state functions
            this.gl.renderer = this;

            // initialise size values
            this.setSize(width, height);

            // gl state stores to avoid redundant calls on methods used internally
            this.state = {};
            this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO };
            this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
            this.state.cullFace = null;
            this.state.frontFace = this.gl.CCW;
            this.state.depthMask = true;
            this.state.depthFunc = this.gl.LESS;
            this.state.premultiplyAlpha = false;
            this.state.flipY = false;
            this.state.unpackAlignment = 4;
            this.state.framebuffer = null;
            this.state.viewport = { width: null, height: null };
            this.state.textureUnits = [];
            this.state.activeTextureUnit = 0;
            this.state.boundBuffer = null;
            this.state.uniformLocations = new Map();

            // store requested extensions
            this.extensions = {};

            // Initialise extra format types
            if (this.isWebgl2) {
                this.getExtension('EXT_color_buffer_float');
                this.getExtension('OES_texture_float_linear');
            } else {
                this.getExtension('OES_texture_float');
                this.getExtension('OES_texture_float_linear');
                this.getExtension('OES_texture_half_float');
                this.getExtension('OES_texture_half_float_linear');
                this.getExtension('OES_element_index_uint');
                this.getExtension('OES_standard_derivatives');
                this.getExtension('EXT_sRGB');
                this.getExtension('WEBGL_depth_texture');
                this.getExtension('WEBGL_draw_buffers');
            }

            // Create method aliases using extension (WebGL1) or native if available (WebGL2)
            this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
            this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
            this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
            this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
            this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
            this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
            this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

            // Store device parameters
            this.parameters = {};
            this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic')
                ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                : 0;
        }

        setSize(width, height) {
            this.width = width;
            this.height = height;

            this.gl.canvas.width = width * this.dpr;
            this.gl.canvas.height = height * this.dpr;

            Object.assign(this.gl.canvas.style, {
                width: width + 'px',
                height: height + 'px',
            });
        }

        setViewport(width, height) {
            if (this.state.viewport.width === width && this.state.viewport.height === height) return;
            this.state.viewport.width = width;
            this.state.viewport.height = height;
            this.gl.viewport(0, 0, width, height);
        }

        enable(id) {
            if (this.state[id] === true) return;
            this.gl.enable(id);
            this.state[id] = true;
        }

        disable(id) {
            if (this.state[id] === false) return;
            this.gl.disable(id);
            this.state[id] = false;
        }

        setBlendFunc(src, dst, srcAlpha, dstAlpha) {
            if (
                this.state.blendFunc.src === src &&
                this.state.blendFunc.dst === dst &&
                this.state.blendFunc.srcAlpha === srcAlpha &&
                this.state.blendFunc.dstAlpha === dstAlpha
            )
                return;
            this.state.blendFunc.src = src;
            this.state.blendFunc.dst = dst;
            this.state.blendFunc.srcAlpha = srcAlpha;
            this.state.blendFunc.dstAlpha = dstAlpha;
            if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
            else this.gl.blendFunc(src, dst);
        }

        setBlendEquation(modeRGB, modeAlpha) {
            modeRGB = modeRGB || this.gl.FUNC_ADD;
            if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
            this.state.blendEquation.modeRGB = modeRGB;
            this.state.blendEquation.modeAlpha = modeAlpha;
            if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
            else this.gl.blendEquation(modeRGB);
        }

        setCullFace(value) {
            if (this.state.cullFace === value) return;
            this.state.cullFace = value;
            this.gl.cullFace(value);
        }

        setFrontFace(value) {
            if (this.state.frontFace === value) return;
            this.state.frontFace = value;
            this.gl.frontFace(value);
        }

        setDepthMask(value) {
            if (this.state.depthMask === value) return;
            this.state.depthMask = value;
            this.gl.depthMask(value);
        }

        setDepthFunc(value) {
            if (this.state.depthFunc === value) return;
            this.state.depthFunc = value;
            this.gl.depthFunc(value);
        }

        activeTexture(value) {
            if (this.state.activeTextureUnit === value) return;
            this.state.activeTextureUnit = value;
            this.gl.activeTexture(this.gl.TEXTURE0 + value);
        }

        bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
            if (this.state.framebuffer === buffer) return;
            this.state.framebuffer = buffer;
            this.gl.bindFramebuffer(target, buffer);
        }

        getExtension(extension, webgl2Func, extFunc) {
            // if webgl2 function supported, return func bound to gl context
            if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);

            // fetch extension once only
            if (!this.extensions[extension]) {
                this.extensions[extension] = this.gl.getExtension(extension);
            }

            // return extension if no function requested
            if (!webgl2Func) return this.extensions[extension];

            // Return null if extension not supported
            if (!this.extensions[extension]) return null;

            // return extension function, bound to extension
            return this.extensions[extension][extFunc].bind(this.extensions[extension]);
        }

        sortOpaque(a, b) {
            if (a.renderOrder !== b.renderOrder) {
                return a.renderOrder - b.renderOrder;
            } else if (a.program.id !== b.program.id) {
                return a.program.id - b.program.id;
            } else if (a.zDepth !== b.zDepth) {
                return a.zDepth - b.zDepth;
            } else {
                return b.id - a.id;
            }
        }

        sortTransparent(a, b) {
            if (a.renderOrder !== b.renderOrder) {
                return a.renderOrder - b.renderOrder;
            }
            if (a.zDepth !== b.zDepth) {
                return b.zDepth - a.zDepth;
            } else {
                return b.id - a.id;
            }
        }

        sortUI(a, b) {
            if (a.renderOrder !== b.renderOrder) {
                return a.renderOrder - b.renderOrder;
            } else if (a.program.id !== b.program.id) {
                return a.program.id - b.program.id;
            } else {
                return b.id - a.id;
            }
        }

        getRenderList({ scene, camera, frustumCull, sort }) {
            let renderList = [];

            if (camera && frustumCull) camera.updateFrustum();

            // Get visible
            scene.traverse((node) => {
                if (!node.visible) return true;
                if (!node.draw) return;

                if (frustumCull && node.frustumCulled && camera) {
                    if (!camera.frustumIntersectsMesh(node)) return;
                }

                renderList.push(node);
            });

            if (sort) {
                const opaque = [];
                const transparent = []; // depthTest true
                const ui = []; // depthTest false

                renderList.forEach((node) => {
                    // Split into the 3 render groups
                    if (!node.program.transparent) {
                        opaque.push(node);
                    } else if (node.program.depthTest) {
                        transparent.push(node);
                    } else {
                        ui.push(node);
                    }

                    node.zDepth = 0;

                    // Only calculate z-depth if renderOrder unset and depthTest is true
                    if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;

                    // update z-depth
                    node.worldMatrix.getTranslation(tempVec3$1);
                    tempVec3$1.applyMatrix4(camera.projectionViewMatrix);
                    node.zDepth = tempVec3$1.z;
                });

                opaque.sort(this.sortOpaque);
                transparent.sort(this.sortTransparent);
                ui.sort(this.sortUI);

                renderList = opaque.concat(transparent, ui);
            }

            return renderList;
        }

        render({ scene, camera, target = null, update = true, sort = true, frustumCull = true, clear }) {
            if (target === null) {
                // make sure no render target bound so draws to canvas
                this.bindFramebuffer();
                this.setViewport(this.width * this.dpr, this.height * this.dpr);
            } else {
                // bind supplied render target and update viewport
                this.bindFramebuffer(target);
                this.setViewport(target.width, target.height);
            }

            if (clear || (this.autoClear && clear !== false)) {
                // Ensure depth buffer writing is enabled so it can be cleared
                if (this.depth && (!target || target.depth)) {
                    this.enable(this.gl.DEPTH_TEST);
                    this.setDepthMask(true);
                }
                this.gl.clear(
                    (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
                        (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
                        (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
                );
            }

            // updates all scene graph matrices
            if (update) scene.updateMatrixWorld();

            // Update camera separately, in case not in scene graph
            if (camera) camera.updateMatrixWorld();

            // Get render list - entails culling and sorting
            const renderList = this.getRenderList({ scene, camera, frustumCull, sort });

            renderList.forEach((node) => {
                node.draw({ camera });
            });
        }
    }

    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */
    function copy$1(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }

    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */
    function set$1(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }

    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */
    function normalize$1(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        let len = x * x + y * y + z * z + w * w;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$1(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }

    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }

    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/
    function setAxisAngle(out, axis, rad) {
        rad = rad * 0.5;
        let s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
    }

    /**
     * Multiplies two quats
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */
    function multiply$1(out, a, b) {
        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bx = b[0],
            by = b[1],
            bz = b[2],
            bw = b[3];

        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }

    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateX(out, a, rad) {
        rad *= 0.5;

        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bx = Math.sin(rad),
            bw = Math.cos(rad);

        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateY(out, a, rad) {
        rad *= 0.5;

        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let by = Math.sin(rad),
            bw = Math.cos(rad);

        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateZ(out, a, rad) {
        rad *= 0.5;

        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bz = Math.sin(rad),
            bw = Math.cos(rad);

        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
    }

    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {quat} out
     */
    function slerp(out, a, b, t) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bx = b[0],
            by = b[1],
            bz = b[2],
            bw = b[3];

        let omega, cosom, sinom, scale0, scale1;

        // calc cosine
        cosom = ax * bx + ay * by + az * bz + aw * bw;
        // adjust signs (if necessary)
        if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        // calculate coefficients
        if (1.0 - cosom > 0.000001) {
            // standard case (slerp)
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        } else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;
        }
        // calculate final values
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;

        return out;
    }

    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */
    function invert(out, a) {
        let a0 = a[0],
            a1 = a[1],
            a2 = a[2],
            a3 = a[3];
        let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        let invDot = dot ? 1.0 / dot : 0;

        // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
    }

    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */
    function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
    }

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */
    function fromMat3(out, m) {
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        let fTrace = m[0] + m[4] + m[8];
        let fRoot;

        if (fTrace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            fRoot = Math.sqrt(fTrace + 1.0); // 2w
            out[3] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot; // 1/(4w)
            out[0] = (m[5] - m[7]) * fRoot;
            out[1] = (m[6] - m[2]) * fRoot;
            out[2] = (m[1] - m[3]) * fRoot;
        } else {
            // |w| <= 1/2
            let i = 0;
            if (m[4] > m[0]) i = 1;
            if (m[8] > m[i * 3 + i]) i = 2;
            let j = (i + 1) % 3;
            let k = (i + 2) % 3;

            fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
            out[i] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot;
            out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
            out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
            out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }

        return out;
    }

    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} euler Angles to rotate around each axis in degrees.
     * @param {String} order detailing order of operations. Default 'XYZ'.
     * @returns {quat} out
     * @function
     */
    function fromEuler(out, euler, order = 'YXZ') {
        let sx = Math.sin(euler[0] * 0.5);
        let cx = Math.cos(euler[0] * 0.5);
        let sy = Math.sin(euler[1] * 0.5);
        let cy = Math.cos(euler[1] * 0.5);
        let sz = Math.sin(euler[2] * 0.5);
        let cz = Math.cos(euler[2] * 0.5);

        if (order === 'XYZ') {
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
        } else if (order === 'YXZ') {
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
        } else if (order === 'ZXY') {
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
        } else if (order === 'ZYX') {
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
        } else if (order === 'YZX') {
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
        } else if (order === 'XZY') {
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
        }

        return out;
    }

    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */
    const copy$2 = copy$1;

    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */
    const set$2 = set$1;

    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    const dot$2 = dot$1;

    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */
    const normalize$2 = normalize$1;

    class Quat extends Array {
        constructor(x = 0, y = 0, z = 0, w = 1) {
            super(x, y, z, w);
            this.onChange = () => {};
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        get w() {
            return this[3];
        }

        set x(v) {
            this[0] = v;
            this.onChange();
        }

        set y(v) {
            this[1] = v;
            this.onChange();
        }

        set z(v) {
            this[2] = v;
            this.onChange();
        }

        set w(v) {
            this[3] = v;
            this.onChange();
        }

        identity() {
            identity(this);
            this.onChange();
            return this;
        }

        set(x, y, z, w) {
            if (x.length) return this.copy(x);
            set$2(this, x, y, z, w);
            this.onChange();
            return this;
        }

        rotateX(a) {
            rotateX(this, this, a);
            this.onChange();
            return this;
        }

        rotateY(a) {
            rotateY(this, this, a);
            this.onChange();
            return this;
        }

        rotateZ(a) {
            rotateZ(this, this, a);
            this.onChange();
            return this;
        }

        inverse(q = this) {
            invert(this, q);
            this.onChange();
            return this;
        }

        conjugate(q = this) {
            conjugate(this, q);
            this.onChange();
            return this;
        }

        copy(q) {
            copy$2(this, q);
            this.onChange();
            return this;
        }

        normalize(q = this) {
            normalize$2(this, q);
            this.onChange();
            return this;
        }

        multiply(qA, qB) {
            if (qB) {
                multiply$1(this, qA, qB);
            } else {
                multiply$1(this, this, qA);
            }
            this.onChange();
            return this;
        }

        dot(v) {
            return dot$2(this, v);
        }

        fromMatrix3(matrix3) {
            fromMat3(this, matrix3);
            this.onChange();
            return this;
        }

        fromEuler(euler) {
            fromEuler(this, euler, euler.order);
            return this;
        }

        fromAxisAngle(axis, a) {
            setAxisAngle(this, axis, a);
            return this;
        }

        slerp(q, t) {
            slerp(this, this, q, t);
            return this;
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            this[3] = a[o + 3];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            a[o + 3] = this[3];
            return a;
        }
    }

    const EPSILON = 0.000001;

    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function copy$3(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function set$3(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }

    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity$1(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }

    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert$1(out, a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
            return null;
        }
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

        return out;
    }

    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }

    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply$2(out, a, b) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        // Cache only the current line of the second matrix
        let b0 = b[0],
            b1 = b[1],
            b2 = b[2],
            b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
    }

    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */
    function translate(out, a, v) {
        let x = v[0],
            y = v[1],
            z = v[2];
        let a00, a01, a02, a03;
        let a10, a11, a12, a13;
        let a20, a21, a22, a23;

        if (a === out) {
            out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
            out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
            out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
            out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11];

            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a03;
            out[4] = a10;
            out[5] = a11;
            out[6] = a12;
            out[7] = a13;
            out[8] = a20;
            out[9] = a21;
            out[10] = a22;
            out[11] = a23;

            out[12] = a00 * x + a10 * y + a20 * z + a[12];
            out[13] = a01 * x + a11 * y + a21 * z + a[13];
            out[14] = a02 * x + a12 * y + a22 * z + a[14];
            out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }

        return out;
    }

    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/
    function scale$1(out, a, v) {
        let x = v[0],
            y = v[1],
            z = v[2];

        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate(out, a, rad, axis) {
        let x = axis[0],
            y = axis[1],
            z = axis[2];
        let len = Math.hypot(x, y, z);
        let s, c, t;
        let a00, a01, a02, a03;
        let a10, a11, a12, a13;
        let a20, a21, a22, a23;
        let b00, b01, b02;
        let b10, b11, b12;
        let b20, b21, b22;

        if (Math.abs(len) < EPSILON) {
            return null;
        }

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;

        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];

        // Construct the elements of the rotation matrix
        b00 = x * x * t + c;
        b01 = y * x * t + z * s;
        b02 = z * x * t - y * s;
        b10 = x * y * t - z * s;
        b11 = y * y * t + c;
        b12 = z * y * t + x * s;
        b20 = x * z * t + y * s;
        b21 = y * z * t - x * s;
        b22 = z * z * t + c;

        // Perform rotation-specific matrix multiplication
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;

        if (a !== out) {
            // If the source and destination differ, copy the unchanged last row
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        return out;
    }

    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];

        return out;
    }

    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getScaling(out, mat) {
        let m11 = mat[0];
        let m12 = mat[1];
        let m13 = mat[2];
        let m21 = mat[4];
        let m22 = mat[5];
        let m23 = mat[6];
        let m31 = mat[8];
        let m32 = mat[9];
        let m33 = mat[10];

        out[0] = Math.hypot(m11, m12, m13);
        out[1] = Math.hypot(m21, m22, m23);
        out[2] = Math.hypot(m31, m32, m33);

        return out;
    }

    function getMaxScaleOnAxis(mat) {
        let m11 = mat[0];
        let m12 = mat[1];
        let m13 = mat[2];
        let m21 = mat[4];
        let m22 = mat[5];
        let m23 = mat[6];
        let m31 = mat[8];
        let m32 = mat[9];
        let m33 = mat[10];

        const x = m11 * m11 + m12 * m12 + m13 * m13;
        const y = m21 * m21 + m22 * m22 + m23 * m23;
        const z = m31 * m31 + m32 * m32 + m33 * m33;

        return Math.sqrt(Math.max(x, y, z));
    }

    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    const getRotation = (function () {
        const temp = [0, 0, 0];

        return function (out, mat) {
            let scaling = temp;
            getScaling(scaling, mat);

            let is1 = 1 / scaling[0];
            let is2 = 1 / scaling[1];
            let is3 = 1 / scaling[2];

            let sm11 = mat[0] * is1;
            let sm12 = mat[1] * is2;
            let sm13 = mat[2] * is3;
            let sm21 = mat[4] * is1;
            let sm22 = mat[5] * is2;
            let sm23 = mat[6] * is3;
            let sm31 = mat[8] * is1;
            let sm32 = mat[9] * is2;
            let sm33 = mat[10] * is3;

            let trace = sm11 + sm22 + sm33;
            let S = 0;

            if (trace > 0) {
                S = Math.sqrt(trace + 1.0) * 2;
                out[3] = 0.25 * S;
                out[0] = (sm23 - sm32) / S;
                out[1] = (sm31 - sm13) / S;
                out[2] = (sm12 - sm21) / S;
            } else if (sm11 > sm22 && sm11 > sm33) {
                S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
                out[3] = (sm23 - sm32) / S;
                out[0] = 0.25 * S;
                out[1] = (sm12 + sm21) / S;
                out[2] = (sm31 + sm13) / S;
            } else if (sm22 > sm33) {
                S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
                out[3] = (sm31 - sm13) / S;
                out[0] = (sm12 + sm21) / S;
                out[1] = 0.25 * S;
                out[2] = (sm23 + sm32) / S;
            } else {
                S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
                out[3] = (sm12 - sm21) / S;
                out[0] = (sm31 + sm13) / S;
                out[1] = (sm23 + sm32) / S;
                out[2] = 0.25 * S;
            }

            return out;
        };
    })();

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */
    function fromRotationTranslationScale(out, q, v, s) {
        // Quaternion math
        let x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;

        let xx = x * x2;
        let xy = x * y2;
        let xz = x * z2;
        let yy = y * y2;
        let yz = y * z2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        let sx = s[0];
        let sy = s[1];
        let sz = s[2];

        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;

        return out;
    }

    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */
    function fromQuat(out, q) {
        let x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;

        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;

        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;

        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;

        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;

        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;

        return out;
    }

    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
        let f = 1.0 / Math.tan(fovy / 2);
        let nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = 2 * far * near * nf;
        out[15] = 0;
        return out;
    }

    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function ortho(out, left, right, bottom, top, near, far) {
        let lr = 1 / (left - right);
        let bt = 1 / (bottom - top);
        let nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
    }

    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} target Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function targetTo(out, eye, target, up) {
        let eyex = eye[0],
            eyey = eye[1],
            eyez = eye[2],
            upx = up[0],
            upy = up[1],
            upz = up[2];

        let z0 = eyex - target[0],
            z1 = eyey - target[1],
            z2 = eyez - target[2];

        let len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len === 0) {
            // eye and target are in the same position
            z2 = 1;
        } else {
            len = 1 / Math.sqrt(len);
            z0 *= len;
            z1 *= len;
            z2 *= len;
        }

        let x0 = upy * z2 - upz * z1,
            x1 = upz * z0 - upx * z2,
            x2 = upx * z1 - upy * z0;

        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len === 0) {
            // up and z are parallel
            if (upz) {
                upx += 1e-6;
            } else if (upy) {
                upz += 1e-6;
            } else {
                upy += 1e-6;
            }
            (x0 = upy * z2 - upz * z1), (x1 = upz * z0 - upx * z2), (x2 = upx * z1 - upy * z0);

            len = x0 * x0 + x1 * x1 + x2 * x2;
        }

        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;

        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
    }

    class Mat4 extends Array {
        constructor(
            m00 = 1,
            m01 = 0,
            m02 = 0,
            m03 = 0,
            m10 = 0,
            m11 = 1,
            m12 = 0,
            m13 = 0,
            m20 = 0,
            m21 = 0,
            m22 = 1,
            m23 = 0,
            m30 = 0,
            m31 = 0,
            m32 = 0,
            m33 = 1
        ) {
            super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            return this;
        }

        get x() {
            return this[12];
        }

        get y() {
            return this[13];
        }

        get z() {
            return this[14];
        }

        get w() {
            return this[15];
        }

        set x(v) {
            this[12] = v;
        }

        set y(v) {
            this[13] = v;
        }

        set z(v) {
            this[14] = v;
        }

        set w(v) {
            this[15] = v;
        }

        set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            if (m00.length) return this.copy(m00);
            set$3(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            return this;
        }

        translate(v, m = this) {
            translate(this, m, v);
            return this;
        }

        rotate(v, axis, m = this) {
            rotate(this, m, v, axis);
            return this;
        }

        scale(v, m = this) {
            scale$1(this, m, typeof v === 'number' ? [v, v, v] : v);
            return this;
        }

        multiply(ma, mb) {
            if (mb) {
                multiply$2(this, ma, mb);
            } else {
                multiply$2(this, this, ma);
            }
            return this;
        }

        identity() {
            identity$1(this);
            return this;
        }

        copy(m) {
            copy$3(this, m);
            return this;
        }

        fromPerspective({ fov, aspect, near, far } = {}) {
            perspective(this, fov, aspect, near, far);
            return this;
        }

        fromOrthogonal({ left, right, bottom, top, near, far }) {
            ortho(this, left, right, bottom, top, near, far);
            return this;
        }

        fromQuaternion(q) {
            fromQuat(this, q);
            return this;
        }

        setPosition(v) {
            this.x = v[0];
            this.y = v[1];
            this.z = v[2];
            return this;
        }

        inverse(m = this) {
            invert$1(this, m);
            return this;
        }

        compose(q, pos, scale) {
            fromRotationTranslationScale(this, q, pos, scale);
            return this;
        }

        getRotation(q) {
            getRotation(q, this);
            return this;
        }

        getTranslation(pos) {
            getTranslation(pos, this);
            return this;
        }

        getScaling(scale) {
            getScaling(scale, this);
            return this;
        }

        getMaxScaleOnAxis() {
            return getMaxScaleOnAxis(this);
        }

        lookAt(eye, target, up) {
            targetTo(this, eye, target, up);
            return this;
        }

        determinant() {
            return determinant(this);
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            this[3] = a[o + 3];
            this[4] = a[o + 4];
            this[5] = a[o + 5];
            this[6] = a[o + 6];
            this[7] = a[o + 7];
            this[8] = a[o + 8];
            this[9] = a[o + 9];
            this[10] = a[o + 10];
            this[11] = a[o + 11];
            this[12] = a[o + 12];
            this[13] = a[o + 13];
            this[14] = a[o + 14];
            this[15] = a[o + 15];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            a[o + 3] = this[3];
            a[o + 4] = this[4];
            a[o + 5] = this[5];
            a[o + 6] = this[6];
            a[o + 7] = this[7];
            a[o + 8] = this[8];
            a[o + 9] = this[9];
            a[o + 10] = this[10];
            a[o + 11] = this[11];
            a[o + 12] = this[12];
            a[o + 13] = this[13];
            a[o + 14] = this[14];
            a[o + 15] = this[15];
            return a;
        }
    }

    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    function fromRotationMatrix(out, m, order = 'YXZ') {
        if (order === 'XYZ') {
            out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
            if (Math.abs(m[8]) < 0.99999) {
                out[0] = Math.atan2(-m[9], m[10]);
                out[2] = Math.atan2(-m[4], m[0]);
            } else {
                out[0] = Math.atan2(m[6], m[5]);
                out[2] = 0;
            }
        } else if (order === 'YXZ') {
            out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
            if (Math.abs(m[9]) < 0.99999) {
                out[1] = Math.atan2(m[8], m[10]);
                out[2] = Math.atan2(m[1], m[5]);
            } else {
                out[1] = Math.atan2(-m[2], m[0]);
                out[2] = 0;
            }
        } else if (order === 'ZXY') {
            out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
            if (Math.abs(m[6]) < 0.99999) {
                out[1] = Math.atan2(-m[2], m[10]);
                out[2] = Math.atan2(-m[4], m[5]);
            } else {
                out[1] = 0;
                out[2] = Math.atan2(m[1], m[0]);
            }
        } else if (order === 'ZYX') {
            out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
            if (Math.abs(m[2]) < 0.99999) {
                out[0] = Math.atan2(m[6], m[10]);
                out[2] = Math.atan2(m[1], m[0]);
            } else {
                out[0] = 0;
                out[2] = Math.atan2(-m[4], m[5]);
            }
        } else if (order === 'YZX') {
            out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
            if (Math.abs(m[1]) < 0.99999) {
                out[0] = Math.atan2(-m[9], m[5]);
                out[1] = Math.atan2(-m[2], m[0]);
            } else {
                out[0] = 0;
                out[1] = Math.atan2(m[8], m[10]);
            }
        } else if (order === 'XZY') {
            out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
            if (Math.abs(m[4]) < 0.99999) {
                out[0] = Math.atan2(m[6], m[5]);
                out[1] = Math.atan2(m[8], m[0]);
            } else {
                out[0] = Math.atan2(-m[9], m[10]);
                out[1] = 0;
            }
        }

        return out;
    }

    const tmpMat4 = new Mat4();

    class Euler extends Array {
        constructor(x = 0, y = x, z = x, order = 'YXZ') {
            super(x, y, z);
            this.order = order;
            this.onChange = () => {};
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        set x(v) {
            this[0] = v;
            this.onChange();
        }

        set y(v) {
            this[1] = v;
            this.onChange();
        }

        set z(v) {
            this[2] = v;
            this.onChange();
        }

        set(x, y = x, z = x) {
            if (x.length) return this.copy(x);
            this[0] = x;
            this[1] = y;
            this[2] = z;
            this.onChange();
            return this;
        }

        copy(v) {
            this[0] = v[0];
            this[1] = v[1];
            this[2] = v[2];
            this.onChange();
            return this;
        }

        reorder(order) {
            this.order = order;
            this.onChange();
            return this;
        }

        fromRotationMatrix(m, order = this.order) {
            fromRotationMatrix(this, m, order);
            return this;
        }

        fromQuaternion(q, order = this.order) {
            tmpMat4.fromQuaternion(q);
            return this.fromRotationMatrix(tmpMat4, order);
        }
    }

    class Transform {
        constructor() {
            this.parent = null;
            this.children = [];
            this.visible = true;

            this.matrix = new Mat4();
            this.worldMatrix = new Mat4();
            this.matrixAutoUpdate = true;

            this.position = new Vec3();
            this.quaternion = new Quat();
            this.scale = new Vec3(1);
            this.rotation = new Euler();
            this.up = new Vec3(0, 1, 0);

            this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
            this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
        }

        setParent(parent, notifyParent = true) {
            if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
            this.parent = parent;
            if (notifyParent && parent) parent.addChild(this, false);
        }

        addChild(child, notifyChild = true) {
            if (!~this.children.indexOf(child)) this.children.push(child);
            if (notifyChild) child.setParent(this, false);
        }

        removeChild(child, notifyChild = true) {
            if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
            if (notifyChild) child.setParent(null, false);
        }

        updateMatrixWorld(force) {
            if (this.matrixAutoUpdate) this.updateMatrix();
            if (this.worldMatrixNeedsUpdate || force) {
                if (this.parent === null) this.worldMatrix.copy(this.matrix);
                else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
                this.worldMatrixNeedsUpdate = false;
                force = true;
            }

            for (let i = 0, l = this.children.length; i < l; i++) {
                this.children[i].updateMatrixWorld(force);
            }
        }

        updateMatrix() {
            this.matrix.compose(this.quaternion, this.position, this.scale);
            this.worldMatrixNeedsUpdate = true;
        }

        traverse(callback) {
            // Return true in callback to stop traversing children
            if (callback(this)) return;
            for (let i = 0, l = this.children.length; i < l; i++) {
                this.children[i].traverse(callback);
            }
        }

        decompose() {
            this.matrix.getTranslation(this.position);
            this.matrix.getRotation(this.quaternion);
            this.matrix.getScaling(this.scale);
            this.rotation.fromQuaternion(this.quaternion);
        }

        lookAt(target, invert = false) {
            if (invert) this.matrix.lookAt(this.position, target, this.up);
            else this.matrix.lookAt(target, this.position, this.up);
            this.matrix.getRotation(this.quaternion);
            this.rotation.fromQuaternion(this.quaternion);
        }
    }

    const tempMat4 = new Mat4();
    const tempVec3a = new Vec3();
    const tempVec3b = new Vec3();

    class Camera extends Transform {
        constructor(gl, { near = 0.1, far = 100, fov = 45, aspect = 1, left, right, bottom, top, zoom = 1 } = {}) {
            super();

            Object.assign(this, { near, far, fov, aspect, left, right, bottom, top, zoom });

            this.projectionMatrix = new Mat4();
            this.viewMatrix = new Mat4();
            this.projectionViewMatrix = new Mat4();
            this.worldPosition = new Vec3();

            // Use orthographic if left/right set, else default to perspective camera
            this.type = left || right ? 'orthographic' : 'perspective';

            if (this.type === 'orthographic') this.orthographic();
            else this.perspective();
        }

        perspective({ near = this.near, far = this.far, fov = this.fov, aspect = this.aspect } = {}) {
            Object.assign(this, { near, far, fov, aspect });
            this.projectionMatrix.fromPerspective({ fov: fov * (Math.PI / 180), aspect, near, far });
            this.type = 'perspective';
            return this;
        }

        orthographic({
            near = this.near,
            far = this.far,
            left = this.left,
            right = this.right,
            bottom = this.bottom,
            top = this.top,
            zoom = this.zoom,
        } = {}) {
            Object.assign(this, { near, far, left, right, bottom, top, zoom });
            left /= zoom;
            right /= zoom;
            bottom /= zoom;
            top /= zoom;
            this.projectionMatrix.fromOrthogonal({ left, right, bottom, top, near, far });
            this.type = 'orthographic';
            return this;
        }

        updateMatrixWorld() {
            super.updateMatrixWorld();
            this.viewMatrix.inverse(this.worldMatrix);
            this.worldMatrix.getTranslation(this.worldPosition);

            // used for sorting
            this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
            return this;
        }

        lookAt(target) {
            super.lookAt(target, true);
            return this;
        }

        // Project 3D coordinate to 2D point
        project(v) {
            v.applyMatrix4(this.viewMatrix);
            v.applyMatrix4(this.projectionMatrix);
            return this;
        }

        // Unproject 2D point to 3D coordinate
        unproject(v) {
            v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
            v.applyMatrix4(this.worldMatrix);
            return this;
        }

        updateFrustum() {
            if (!this.frustum) {
                this.frustum = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
            }

            const m = this.projectionViewMatrix;
            this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
            this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
            this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
            this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
            this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
            this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

            for (let i = 0; i < 6; i++) {
                const invLen = 1.0 / this.frustum[i].distance();
                this.frustum[i].multiply(invLen);
                this.frustum[i].constant *= invLen;
            }
        }

        frustumIntersectsMesh(node) {
            // If no position attribute, treat as frustumCulled false
            if (!node.geometry.attributes.position) return true;

            if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();

            if (!node.geometry.bounds) return true;

            const center = tempVec3a;
            center.copy(node.geometry.bounds.center);
            center.applyMatrix4(node.worldMatrix);

            const radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();

            return this.frustumIntersectsSphere(center, radius);
        }

        frustumIntersectsSphere(center, radius) {
            const normal = tempVec3b;

            for (let i = 0; i < 6; i++) {
                const plane = this.frustum[i];
                const distance = normal.copy(plane).dot(center) + plane.constant;
                if (distance < -radius) return false;
            }
            return true;
        }
    }

    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */
    function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
    }

    /**
     * Calculates a 3x3 matrix from the given quaternion
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat3} out
     */
    function fromQuat$1(out, q) {
        let x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;

        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;

        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;

        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;

        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;

        return out;
    }

    /**
     * Copy the values from one mat3 to another
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function copy$4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }

    /**
     * Set the components of a mat3 to the given values
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */
    function set$4(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
    }

    /**
     * Set a mat3 to the identity matrix
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */
    function identity$2(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }

    /**
     * Inverts a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function invert$2(out, a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        let a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        let a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        let b01 = a22 * a11 - a12 * a21;
        let b11 = -a22 * a10 + a12 * a20;
        let b21 = a21 * a10 - a11 * a20;

        // Calculate the determinant
        let det = a00 * b01 + a01 * b11 + a02 * b21;

        if (!det) {
            return null;
        }
        det = 1.0 / det;

        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
    }

    /**
     * Multiplies two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function multiply$3(out, a, b) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        let a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        let a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        let b00 = b[0],
            b01 = b[1],
            b02 = b[2];
        let b10 = b[3],
            b11 = b[4],
            b12 = b[5];
        let b20 = b[6],
            b21 = b[7],
            b22 = b[8];

        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;

        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;

        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
    }

    /**
     * Translate a mat3 by the given vector
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to translate
     * @param {vec2} v vector to translate by
     * @returns {mat3} out
     */
    function translate$1(out, a, v) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a10 = a[3],
            a11 = a[4],
            a12 = a[5],
            a20 = a[6],
            a21 = a[7],
            a22 = a[8],
            x = v[0],
            y = v[1];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;

        out[3] = a10;
        out[4] = a11;
        out[5] = a12;

        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
    }

    /**
     * Rotates a mat3 by the given angle
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    function rotate$1(out, a, rad) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a10 = a[3],
            a11 = a[4],
            a12 = a[5],
            a20 = a[6],
            a21 = a[7],
            a22 = a[8],
            s = Math.sin(rad),
            c = Math.cos(rad);

        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;

        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;

        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
    }

    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat3} out
     **/
    function scale$2(out, a, v) {
        let x = v[0],
            y = v[1];

        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];

        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];

        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }

    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {mat4} a Mat4 to derive the normal matrix from
     *
     * @returns {mat3} out
     */
    function normalFromMat4(out, a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
            return null;
        }
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

        return out;
    }

    class Mat3 extends Array {
        constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
            super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
            return this;
        }

        set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            if (m00.length) return this.copy(m00);
            set$4(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
            return this;
        }

        translate(v, m = this) {
            translate$1(this, m, v);
            return this;
        }

        rotate(v, m = this) {
            rotate$1(this, m, v);
            return this;
        }

        scale(v, m = this) {
            scale$2(this, m, v);
            return this;
        }

        multiply(ma, mb) {
            if (mb) {
                multiply$3(this, ma, mb);
            } else {
                multiply$3(this, this, ma);
            }
            return this;
        }

        identity() {
            identity$2(this);
            return this;
        }

        copy(m) {
            copy$4(this, m);
            return this;
        }

        fromMatrix4(m) {
            fromMat4(this, m);
            return this;
        }

        fromQuaternion(q) {
            fromQuat$1(this, q);
            return this;
        }

        fromBasis(vec3a, vec3b, vec3c) {
            this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
            return this;
        }

        inverse(m = this) {
            invert$2(this, m);
            return this;
        }

        getNormalMatrix(m) {
            normalFromMat4(this, m);
            return this;
        }
    }

    let ID$3 = 0;

    class Mesh extends Transform {
        constructor(gl, { geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 } = {}) {
            super();
            if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
            this.gl = gl;
            this.id = ID$3++;
            this.geometry = geometry;
            this.program = program;
            this.mode = mode;

            // Used to skip frustum culling
            this.frustumCulled = frustumCulled;

            // Override sorting to force an order
            this.renderOrder = renderOrder;
            this.modelViewMatrix = new Mat4();
            this.normalMatrix = new Mat3();
            this.beforeRenderCallbacks = [];
            this.afterRenderCallbacks = [];
        }

        onBeforeRender(f) {
            this.beforeRenderCallbacks.push(f);
            return this;
        }

        onAfterRender(f) {
            this.afterRenderCallbacks.push(f);
            return this;
        }

        draw({ camera } = {}) {
            this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
            if (camera) {
                // Add empty matrix uniforms to program if unset
                if (!this.program.uniforms.modelMatrix) {
                    Object.assign(this.program.uniforms, {
                        modelMatrix: { value: null },
                        viewMatrix: { value: null },
                        modelViewMatrix: { value: null },
                        normalMatrix: { value: null },
                        projectionMatrix: { value: null },
                        cameraPosition: { value: null },
                    });
                }

                // Set the matrix uniforms
                this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
                this.program.uniforms.cameraPosition.value = camera.worldPosition;
                this.program.uniforms.viewMatrix.value = camera.viewMatrix;
                this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
                this.program.uniforms.modelMatrix.value = this.worldMatrix;
                this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
                this.program.uniforms.normalMatrix.value = this.normalMatrix;
            }

            // determine if faces need to be flipped - when mesh scaled negatively
            let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
            this.program.use({ flipFaces });
            this.geometry.draw({ mode: this.mode, program: this.program });
            this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
        }
    }

    // TODO: delete texture
    // TODO: use texSubImage2D for updates (video or when loaded)
    // TODO: need? encoding = linearEncoding
    // TODO: support non-compressed mipmaps uploads

    const emptyPixel = new Uint8Array(4);

    function isPowerOf2(value) {
        return (value & (value - 1)) === 0;
    }

    let ID$4 = 1;

    class Texture {
        constructor(
            gl,
            {
                image,
                target = gl.TEXTURE_2D,
                type = gl.UNSIGNED_BYTE,
                format = gl.RGBA,
                internalFormat = format,
                wrapS = gl.CLAMP_TO_EDGE,
                wrapT = gl.CLAMP_TO_EDGE,
                generateMipmaps = true,
                minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
                magFilter = gl.LINEAR,
                premultiplyAlpha = false,
                unpackAlignment = 4,
                flipY = target == gl.TEXTURE_2D ? true : false,
                anisotropy = 0,
                level = 0,
                width, // used for RenderTargets or Data Textures
                height = width,
            } = {}
        ) {
            this.gl = gl;
            this.id = ID$4++;

            this.image = image;
            this.target = target;
            this.type = type;
            this.format = format;
            this.internalFormat = internalFormat;
            this.minFilter = minFilter;
            this.magFilter = magFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.generateMipmaps = generateMipmaps;
            this.premultiplyAlpha = premultiplyAlpha;
            this.unpackAlignment = unpackAlignment;
            this.flipY = flipY;
            this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
            this.level = level;
            this.width = width;
            this.height = height;
            this.texture = this.gl.createTexture();

            this.store = {
                image: null,
            };

            // Alias for state store to avoid redundant calls for global state
            this.glState = this.gl.renderer.state;

            // State store to avoid redundant calls for per-texture state
            this.state = {};
            this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
            this.state.magFilter = this.gl.LINEAR;
            this.state.wrapS = this.gl.REPEAT;
            this.state.wrapT = this.gl.REPEAT;
            this.state.anisotropy = 0;
        }

        bind() {
            // Already bound to active texture unit
            if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
            this.gl.bindTexture(this.target, this.texture);
            this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
        }

        update(textureUnit = 0) {
            const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);

            // Make sure that texture is bound to its texture unit
            if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
                // set active texture unit to perform texture functions
                this.gl.renderer.activeTexture(textureUnit);
                this.bind();
            }

            if (!needsUpdate) return;
            this.needsUpdate = false;

            if (this.flipY !== this.glState.flipY) {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
                this.glState.flipY = this.flipY;
            }

            if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
                this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                this.glState.premultiplyAlpha = this.premultiplyAlpha;
            }

            if (this.unpackAlignment !== this.glState.unpackAlignment) {
                this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
                this.glState.unpackAlignment = this.unpackAlignment;
            }

            if (this.minFilter !== this.state.minFilter) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
                this.state.minFilter = this.minFilter;
            }

            if (this.magFilter !== this.state.magFilter) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
                this.state.magFilter = this.magFilter;
            }

            if (this.wrapS !== this.state.wrapS) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
                this.state.wrapS = this.wrapS;
            }

            if (this.wrapT !== this.state.wrapT) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
                this.state.wrapT = this.wrapT;
            }

            if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
                this.gl.texParameterf(
                    this.target,
                    this.gl.renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT,
                    this.anisotropy
                );
                this.state.anisotropy = this.anisotropy;
            }

            if (this.image) {
                if (this.image.width) {
                    this.width = this.image.width;
                    this.height = this.image.height;
                }

                if (this.target === this.gl.TEXTURE_CUBE_MAP) {
                    // For cube maps
                    for (let i = 0; i < 6; i++) {
                        this.gl.texImage2D(
                            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            this.level,
                            this.internalFormat,
                            this.format,
                            this.type,
                            this.image[i]
                        );
                    }
                } else if (ArrayBuffer.isView(this.image)) {
                    // Data texture
                    this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                } else if (this.image.isCompressedTexture) {
                    // Compressed texture
                    for (let level = 0; level < this.image.length; level++) {
                        this.gl.compressedTexImage2D(
                            this.target,
                            level,
                            this.internalFormat,
                            this.image[level].width,
                            this.image[level].height,
                            0,
                            this.image[level].data
                        );
                    }
                } else {
                    // Regular texture
                    this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                }

                if (this.generateMipmaps) {
                    // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
                    if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
                        this.generateMipmaps = false;
                        this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
                        this.minFilter = this.gl.LINEAR;
                    } else {
                        this.gl.generateMipmap(this.target);
                    }
                }

                // Callback for when data is pushed to GPU
                this.onUpdate && this.onUpdate();
            } else {
                if (this.target === this.gl.TEXTURE_CUBE_MAP) {
                    // Upload empty pixel for each side while no image to avoid errors while image or video loading
                    for (let i = 0; i < 6; i++) {
                        this.gl.texImage2D(
                            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            0,
                            this.gl.RGBA,
                            1,
                            1,
                            0,
                            this.gl.RGBA,
                            this.gl.UNSIGNED_BYTE,
                            emptyPixel
                        );
                    }
                } else if (this.width) {
                    // image intentionally left null for RenderTarget
                    this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
                } else {
                    // Upload empty pixel if no image to avoid errors while image or video loading
                    this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
                }
            }
            this.store.image = this.image;
        }
    }

    // TODO: multi target rendering

    class RenderTarget {
        constructor(
            gl,
            {
                width = gl.canvas.width,
                height = gl.canvas.height,
                target = gl.FRAMEBUFFER,
                color = 1, // number of color attachments
                depth = true,
                stencil = false,
                depthTexture = false, // note - stencil breaks
                wrapS = gl.CLAMP_TO_EDGE,
                wrapT = gl.CLAMP_TO_EDGE,
                minFilter = gl.LINEAR,
                magFilter = minFilter,
                type = gl.UNSIGNED_BYTE,
                format = gl.RGBA,
                internalFormat = format,
                unpackAlignment,
                premultiplyAlpha,
            } = {}
        ) {
            this.gl = gl;
            this.width = width;
            this.height = height;
            this.depth = depth;
            this.buffer = this.gl.createFramebuffer();
            this.target = target;
            this.gl.bindFramebuffer(this.target, this.buffer);

            this.textures = [];
            const drawBuffers = [];

            // create and attach required num of color textures
            for (let i = 0; i < color; i++) {
                this.textures.push(
                    new Texture(gl, {
                        width,
                        height,
                        wrapS,
                        wrapT,
                        minFilter,
                        magFilter,
                        type,
                        format,
                        internalFormat,
                        unpackAlignment,
                        premultiplyAlpha,
                        flipY: false,
                        generateMipmaps: false,
                    })
                );
                this.textures[i].update();
                this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
                drawBuffers.push(this.gl.COLOR_ATTACHMENT0 + i);
            }

            // For multi-render targets shader access
            if (drawBuffers.length > 1) this.gl.renderer.drawBuffers(drawBuffers);

            // alias for majority of use cases
            this.texture = this.textures[0];

            // note depth textures break stencil - so can't use together
            if (depthTexture && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension('WEBGL_depth_texture'))) {
                this.depthTexture = new Texture(gl, {
                    width,
                    height,
                    minFilter: this.gl.NEAREST,
                    magFilter: this.gl.NEAREST,
                    format: this.gl.DEPTH_COMPONENT,
                    internalFormat: gl.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                    type: this.gl.UNSIGNED_INT,
                });
                this.depthTexture.update();
                this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
            } else {
                // Render buffers
                if (depth && !stencil) {
                    this.depthBuffer = this.gl.createRenderbuffer();
                    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
                    this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
                }

                if (stencil && !depth) {
                    this.stencilBuffer = this.gl.createRenderbuffer();
                    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
                    this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer);
                }

                if (depth && stencil) {
                    this.depthStencilBuffer = this.gl.createRenderbuffer();
                    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
                    this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer);
                }
            }

            this.gl.bindFramebuffer(this.target, null);
        }
    }

    const NAMES = {
        black: '#000000',
        white: '#ffffff',
        red: '#ff0000',
        green: '#00ff00',
        blue: '#0000ff',
        fuchsia: '#ff00ff',
        cyan: '#00ffff',
        yellow: '#ffff00',
        orange: '#ff8000',
    };

    function hexToRGB(hex) {
        if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
        return [parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255];
    }

    function numberToRGB(num) {
        num = parseInt(num);
        return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
    }

    function parseColor(color) {
        // Empty
        if (color === undefined) return [0, 0, 0];

        // Decimal
        if (arguments.length === 3) return arguments;

        // Number
        if (!isNaN(color)) return numberToRGB(color);

        // Hex
        if (color[0] === '#') return hexToRGB(color);

        // Names
        if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);

        console.warn('Color format not recognised');
        return [0, 0, 0];
    }

    // Color stored as an array of RGB decimal values (between 0 > 1)
    // Constructor and set method accept following formats:
    // new Color() - Empty (defaults to black)
    // new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
    // new Color(0.7, 0.0, 0.1) - Decimal RGB values
    // new Color('#ff0000') - Hex string
    // new Color('#ccc') - Short-hand Hex string
    // new Color(0x4f27e8) - Number
    // new Color('red') - Color name string (short list in ColorFunc.js)

    class Color extends Array {
        constructor(color) {
            if (Array.isArray(color)) return super(...color);
            return super(...parseColor(...arguments));
        }

        get r() {
            return this[0];
        }

        get g() {
            return this[1];
        }

        get b() {
            return this[2];
        }

        set r(v) {
            this[0] = v;
        }

        set g(v) {
            this[1] = v;
        }

        set b(v) {
            this[2] = v;
        }

        set(color) {
            if (Array.isArray(color)) return this.copy(color);
            return this.copy(parseColor(...arguments));
        }

        copy(v) {
            this[0] = v[0];
            this[1] = v[1];
            this[2] = v[2];
            return this;
        }
    }

    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */
    function copy$5(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }

    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */
    function set$5(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
    }

    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function add$1(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function subtract$1(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    }

    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function multiply$4(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    }

    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function divide$1(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    }

    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */
    function scale$3(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
    }

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance$1(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return Math.sqrt(x * x + y * y);
    }

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance$1(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return x * x + y * y;
    }

    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length$1(a) {
        var x = a[0],
            y = a[1];
        return Math.sqrt(x * x + y * y);
    }

    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength$1(a) {
        var x = a[0],
            y = a[1];
        return x * x + y * y;
    }

    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    function negate$1(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
    }

    /**
     * Returns the inverse of the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to invert
     * @returns {vec2} out
     */
    function inverse$1(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
    }

    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */
    function normalize$3(out, a) {
        var x = a[0],
            y = a[1];
        var len = x * x + y * y;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$3(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product returns a scalar
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} cross product of a and b
     */
    function cross$1(a, b) {
        return a[0] * b[1] - a[1] * b[0];
    }

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec2} out
     */
    function lerp$1(out, a, b, t) {
        var ax = a[0],
            ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
    }

    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat3(out, a, m) {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
    }

    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat4$1(out, a, m) {
        let x = a[0];
        let y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
    }

    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals$1(a, b) {
        return a[0] === b[0] && a[1] === b[1];
    }

    class Vec2 extends Array {
        constructor(x = 0, y = x) {
            super(x, y);
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        set x(v) {
            this[0] = v;
        }

        set y(v) {
            this[1] = v;
        }

        set(x, y = x) {
            if (x.length) return this.copy(x);
            set$5(this, x, y);
            return this;
        }

        copy(v) {
            copy$5(this, v);
            return this;
        }

        add(va, vb) {
            if (vb) add$1(this, va, vb);
            else add$1(this, this, va);
            return this;
        }

        sub(va, vb) {
            if (vb) subtract$1(this, va, vb);
            else subtract$1(this, this, va);
            return this;
        }

        multiply(v) {
            if (v.length) multiply$4(this, this, v);
            else scale$3(this, this, v);
            return this;
        }

        divide(v) {
            if (v.length) divide$1(this, this, v);
            else scale$3(this, this, 1 / v);
            return this;
        }

        inverse(v = this) {
            inverse$1(this, v);
            return this;
        }

        // Can't use 'length' as Array.prototype uses it
        len() {
            return length$1(this);
        }

        distance(v) {
            if (v) return distance$1(this, v);
            else return length$1(this);
        }

        squaredLen() {
            return this.squaredDistance();
        }

        squaredDistance(v) {
            if (v) return squaredDistance$1(this, v);
            else return squaredLength$1(this);
        }

        negate(v = this) {
            negate$1(this, v);
            return this;
        }

        cross(va, vb) {
            if (vb) return cross$1(va, vb);
            return cross$1(this, va);
        }

        scale(v) {
            scale$3(this, this, v);
            return this;
        }

        normalize() {
            normalize$3(this, this);
            return this;
        }

        dot(v) {
            return dot$3(this, v);
        }

        equals(v) {
            return exactEquals$1(this, v);
        }

        applyMatrix3(mat3) {
            transformMat3(this, this, mat3);
            return this;
        }

        applyMatrix4(mat4) {
            transformMat4$1(this, this, mat4);
            return this;
        }

        lerp(v, a) {
            lerp$1(this, this, v, a);
        }

        clone() {
            return new Vec2(this[0], this[1]);
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            return a;
        }
    }

    class Vec4 extends Array {
        constructor(x = 0, y = x, z = x, w = x) {
            super(x, y, z, w);
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        get w() {
            return this[3];
        }

        set x(v) {
            this[0] = v;
        }

        set y(v) {
            this[1] = v;
        }

        set z(v) {
            this[2] = v;
        }

        set w(v) {
            this[3] = v;
        }

        set(x, y, z, w) {
            if (x.length) return this.copy(x);
            set$1(this, x, y, z, w);
            return this;
        }

        copy(v) {
            copy$1(this, v);
            return this;
        }

        normalize() {
            normalize$1(this, this);
            return this;
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            this[3] = a[o + 3];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            a[o + 3] = this[3];
            return a;
        }
    }

    class Plane extends Geometry {
        constructor(gl, { width = 1, height = 1, widthSegments = 1, heightSegments = 1, attributes = {} } = {}) {
            const wSegs = widthSegments;
            const hSegs = heightSegments;

            // Determine length of arrays
            const num = (wSegs + 1) * (hSegs + 1);
            const numIndices = wSegs * hSegs * 6;

            // Generate empty arrays once
            const position = new Float32Array(num * 3);
            const normal = new Float32Array(num * 3);
            const uv = new Float32Array(num * 2);
            const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

            Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);

            Object.assign(attributes, {
                position: { size: 3, data: position },
                normal: { size: 3, data: normal },
                uv: { size: 2, data: uv },
                index: { data: index },
            });

            super(gl, attributes);
        }

        static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
            const io = i;
            const segW = width / wSegs;
            const segH = height / hSegs;

            for (let iy = 0; iy <= hSegs; iy++) {
                let y = iy * segH - height / 2;
                for (let ix = 0; ix <= wSegs; ix++, i++) {
                    let x = ix * segW - width / 2;

                    position[i * 3 + u] = x * uDir;
                    position[i * 3 + v] = y * vDir;
                    position[i * 3 + w] = depth / 2;

                    normal[i * 3 + u] = 0;
                    normal[i * 3 + v] = 0;
                    normal[i * 3 + w] = depth >= 0 ? 1 : -1;

                    uv[i * 2] = ix / wSegs;
                    uv[i * 2 + 1] = 1 - iy / hSegs;

                    if (iy === hSegs || ix === wSegs) continue;
                    let a = io + ix + iy * (wSegs + 1);
                    let b = io + ix + (iy + 1) * (wSegs + 1);
                    let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
                    let d = io + ix + iy * (wSegs + 1) + 1;

                    index[ii * 6] = a;
                    index[ii * 6 + 1] = b;
                    index[ii * 6 + 2] = d;
                    index[ii * 6 + 3] = b;
                    index[ii * 6 + 4] = c;
                    index[ii * 6 + 5] = d;
                    ii++;
                }
            }
        }
    }

    class Box extends Geometry {
        constructor(gl, { width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1, attributes = {} } = {}) {
            const wSegs = widthSegments;
            const hSegs = heightSegments;
            const dSegs = depthSegments;

            const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
            const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;

            const position = new Float32Array(num * 3);
            const normal = new Float32Array(num * 3);
            const uv = new Float32Array(num * 2);
            const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

            let i = 0;
            let ii = 0;

            // left, right
            Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
            Plane.buildPlane(
                position,
                normal,
                uv,
                index,
                depth,
                height,
                -width,
                dSegs,
                hSegs,
                2,
                1,
                0,
                1,
                -1,
                (i += (dSegs + 1) * (hSegs + 1)),
                (ii += dSegs * hSegs)
            );

            // top, bottom
            Plane.buildPlane(
                position,
                normal,
                uv,
                index,
                width,
                depth,
                height,
                dSegs,
                hSegs,
                0,
                2,
                1,
                1,
                1,
                (i += (dSegs + 1) * (hSegs + 1)),
                (ii += dSegs * hSegs)
            );
            Plane.buildPlane(
                position,
                normal,
                uv,
                index,
                width,
                depth,
                -height,
                dSegs,
                hSegs,
                0,
                2,
                1,
                1,
                -1,
                (i += (wSegs + 1) * (dSegs + 1)),
                (ii += wSegs * dSegs)
            );

            // front, back
            Plane.buildPlane(
                position,
                normal,
                uv,
                index,
                width,
                height,
                -depth,
                wSegs,
                hSegs,
                0,
                1,
                2,
                -1,
                -1,
                (i += (wSegs + 1) * (dSegs + 1)),
                (ii += wSegs * dSegs)
            );
            Plane.buildPlane(
                position,
                normal,
                uv,
                index,
                width,
                height,
                depth,
                wSegs,
                hSegs,
                0,
                1,
                2,
                1,
                -1,
                (i += (wSegs + 1) * (hSegs + 1)),
                (ii += wSegs * hSegs)
            );

            Object.assign(attributes, {
                position: { size: 3, data: position },
                normal: { size: 3, data: normal },
                uv: { size: 2, data: uv },
                index: { data: index },
            });

            super(gl, attributes);
        }
    }

    class Sphere extends Geometry {
        constructor(
            gl,
            {
                radius = 0.5,
                widthSegments = 16,
                heightSegments = Math.ceil(widthSegments * 0.5),
                phiStart = 0,
                phiLength = Math.PI * 2,
                thetaStart = 0,
                thetaLength = Math.PI,
                attributes = {},
            } = {}
        ) {
            const wSegs = widthSegments;
            const hSegs = heightSegments;
            const pStart = phiStart;
            const pLength = phiLength;
            const tStart = thetaStart;
            const tLength = thetaLength;

            const num = (wSegs + 1) * (hSegs + 1);
            const numIndices = wSegs * hSegs * 6;

            const position = new Float32Array(num * 3);
            const normal = new Float32Array(num * 3);
            const uv = new Float32Array(num * 2);
            const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

            let i = 0;
            let iv = 0;
            let ii = 0;
            let te = tStart + tLength;
            const grid = [];

            let n = new Vec3();

            for (let iy = 0; iy <= hSegs; iy++) {
                let vRow = [];
                let v = iy / hSegs;
                for (let ix = 0; ix <= wSegs; ix++, i++) {
                    let u = ix / wSegs;
                    let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
                    let y = radius * Math.cos(tStart + v * tLength);
                    let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);

                    position[i * 3] = x;
                    position[i * 3 + 1] = y;
                    position[i * 3 + 2] = z;

                    n.set(x, y, z).normalize();
                    normal[i * 3] = n.x;
                    normal[i * 3 + 1] = n.y;
                    normal[i * 3 + 2] = n.z;

                    uv[i * 2] = u;
                    uv[i * 2 + 1] = 1 - v;

                    vRow.push(iv++);
                }

                grid.push(vRow);
            }

            for (let iy = 0; iy < hSegs; iy++) {
                for (let ix = 0; ix < wSegs; ix++) {
                    let a = grid[iy][ix + 1];
                    let b = grid[iy][ix];
                    let c = grid[iy + 1][ix];
                    let d = grid[iy + 1][ix + 1];

                    if (iy !== 0 || tStart > 0) {
                        index[ii * 3] = a;
                        index[ii * 3 + 1] = b;
                        index[ii * 3 + 2] = d;
                        ii++;
                    }
                    if (iy !== hSegs - 1 || te < Math.PI) {
                        index[ii * 3] = b;
                        index[ii * 3 + 1] = c;
                        index[ii * 3 + 2] = d;
                        ii++;
                    }
                }
            }

            Object.assign(attributes, {
                position: { size: 3, data: position },
                normal: { size: 3, data: normal },
                uv: { size: 2, data: uv },
                index: { data: index },
            });

            super(gl, attributes);
        }
    }

    class Cylinder extends Geometry {
        constructor(
            gl,
            {
                radiusTop = 0.5,
                radiusBottom = 0.5,
                height = 1,
                radialSegments = 8,
                heightSegments = 1,
                openEnded = false,
                thetaStart = 0,
                thetaLength = Math.PI * 2,
                attributes = {},
            } = {}
        ) {
            const rSegs = radialSegments;
            const hSegs = heightSegments;
            const tStart = thetaStart;
            const tLength = thetaLength;

            const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
            const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
            const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;

            const position = new Float32Array(num * 3);
            const normal = new Float32Array(num * 3);
            const uv = new Float32Array(num * 2);
            const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

            let i = 0;
            let ii = 0;
            const indexArray = [];

            addHeight();
            if (!openEnded) {
                if (radiusTop) addCap(true);
                if (radiusBottom) addCap(false);
            }

            function addHeight() {
                let x, y;
                const n = new Vec3();
                const slope = (radiusBottom - radiusTop) / height;

                for (y = 0; y <= hSegs; y++) {
                    const indexRow = [];
                    const v = y / hSegs;

                    const r = v * (radiusBottom - radiusTop) + radiusTop;
                    for (x = 0; x <= rSegs; x++) {
                        const u = x / rSegs;
                        const theta = u * tLength + tStart;
                        const sinTheta = Math.sin(theta);
                        const cosTheta = Math.cos(theta);

                        position.set([r * sinTheta, (0.5 - v) * height, r * cosTheta], i * 3);
                        n.set(sinTheta, slope, cosTheta).normalize();
                        normal.set([n.x, n.y, n.z], i * 3);
                        uv.set([u, 1 - v], i * 2);
                        indexRow.push(i++);
                    }
                    indexArray.push(indexRow);
                }

                for (x = 0; x < rSegs; x++) {
                    for (y = 0; y < hSegs; y++) {
                        const a = indexArray[y][x];
                        const b = indexArray[y + 1][x];
                        const c = indexArray[y + 1][x + 1];
                        const d = indexArray[y][x + 1];

                        index.set([a, b, d, b, c, d], ii * 3);
                        ii += 2;
                    }
                }
            }

            function addCap(isTop) {
                let x;
                const r = isTop === true ? radiusTop : radiusBottom;
                const sign = isTop === true ? 1 : -1;

                const centerIndex = i;
                position.set([0, 0.5 * height * sign, 0], i * 3);
                normal.set([0, sign, 0], i * 3);
                uv.set([0.5, 0.5], i * 2);
                i++;

                for (x = 0; x <= rSegs; x++) {
                    const u = x / rSegs;
                    const theta = u * tLength + tStart;
                    const cosTheta = Math.cos(theta);
                    const sinTheta = Math.sin(theta);

                    position.set([r * sinTheta, 0.5 * height * sign, r * cosTheta], i * 3);
                    normal.set([0, sign, 0], i * 3);
                    uv.set([cosTheta * 0.5 + 0.5, sinTheta * 0.5 * sign + 0.5], i * 2);
                    i++;
                }

                for (x = 0; x < rSegs; x++) {
                    const j = centerIndex + x + 1;
                    if (isTop) {
                        index.set([j, j + 1, centerIndex], ii * 3);
                    } else {
                        index.set([j + 1, j, centerIndex], ii * 3);
                    }
                    ii++;
                }
            }

            Object.assign(attributes, {
                position: { size: 3, data: position },
                normal: { size: 3, data: normal },
                uv: { size: 2, data: uv },
                index: { data: index },
            });

            super(gl, attributes);
        }
    }

    class Triangle extends Geometry {
        constructor(gl, { attributes = {} } = {}) {
            Object.assign(attributes, {
                position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
                uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
            });

            super(gl, attributes);
        }
    }

    // https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js

    class Torus extends Geometry {
        constructor(gl, { radius = 0.5, tube = 0.2, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2, attributes = {} } = {}) {
            const num = (radialSegments + 1) * (tubularSegments + 1);
            const numIndices = radialSegments * tubularSegments * 6;

            const vertices = new Float32Array(num * 3);
            const normals = new Float32Array(num * 3);
            const uvs = new Float32Array(num * 2);
            const indices = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

            const center = new Vec3();
            const vertex = new Vec3();
            const normal = new Vec3();

            // generate vertices, normals and uvs
            let idx = 0;
            for (let j = 0; j <= radialSegments; j++) {
                for (let i = 0; i <= tubularSegments; i++, idx++) {
                    const u = (i / tubularSegments) * arc;
                    const v = (j / radialSegments) * Math.PI * 2;

                    // vertex
                    vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
                    vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
                    vertex.z = tube * Math.sin(v);

                    vertices.set([vertex.x, vertex.y, vertex.z], idx * 3);

                    // normal
                    center.x = radius * Math.cos(u);
                    center.y = radius * Math.sin(u);
                    normal.sub(vertex, center).normalize();

                    normals.set([normal.x, normal.y, normal.z], idx * 3);

                    // uv
                    uvs.set([i / tubularSegments, j / radialSegments], idx * 2);
                }
            }

            // generate indices
            idx = 0;
            for (let j = 1; j <= radialSegments; j++) {
                for (let i = 1; i <= tubularSegments; i++, idx++) {
                    // indices
                    const a = (tubularSegments + 1) * j + i - 1;
                    const b = (tubularSegments + 1) * (j - 1) + i - 1;
                    const c = (tubularSegments + 1) * (j - 1) + i;
                    const d = (tubularSegments + 1) * j + i;

                    // faces
                    indices.set([a, b, d, b, c, d], idx * 6);
                }
            }

            Object.assign(attributes, {
                position: { size: 3, data: vertices },
                normal: { size: 3, data: normals },
                uv: { size: 2, data: uvs },
                index: { data: indices },
            });

            super(gl, attributes);
        }
    }

    // Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.

    const STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 };
    const tempVec3$2 = new Vec3();
    const tempVec2a = new Vec2();
    const tempVec2b = new Vec2();

    function Orbit(
        object,
        {
            element = document,
            enabled = true,
            target = new Vec3(),
            ease = 0.25,
            inertia = 0.85,
            enableRotate = true,
            rotateSpeed = 0.1,
            autoRotate = false,
            autoRotateSpeed = 1.0,
            enableZoom = true,
            zoomSpeed = 1,
            enablePan = true,
            panSpeed = 0.1,
            minPolarAngle = 0,
            maxPolarAngle = Math.PI,
            minAzimuthAngle = -Infinity,
            maxAzimuthAngle = Infinity,
            minDistance = 0,
            maxDistance = Infinity,
        } = {}
    ) {
        this.enabled = enabled;
        this.target = target;

        // Catch attempts to disable - set to 1 so has no effect
        ease = ease || 1;
        inertia = inertia || 0;

        this.minDistance = minDistance;
        this.maxDistance = maxDistance;

        // current position in sphericalTarget coordinates
        const sphericalDelta = { radius: 1, phi: 0, theta: 0 };
        const sphericalTarget = { radius: 1, phi: 0, theta: 0 };
        const spherical = { radius: 1, phi: 0, theta: 0 };
        const panDelta = new Vec3();

        // Grab initial position values
        const offset = new Vec3();
        offset.copy(object.position).sub(this.target);
        spherical.radius = sphericalTarget.radius = offset.distance();
        spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
        spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));

        this.offset = offset;

        this.update = () => {
            if (autoRotate) {
                handleAutoRotate();
            }

            // apply delta
            sphericalTarget.radius *= sphericalDelta.radius;
            sphericalTarget.theta += sphericalDelta.theta;
            sphericalTarget.phi += sphericalDelta.phi;

            // apply boundaries
            sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
            sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
            sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));

            // ease values
            spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
            spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
            spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;

            // apply pan to target. As offset is relative to target, it also shifts
            this.target.add(panDelta);

            // apply rotation to offset
            let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
            offset.x = sinPhiRadius * Math.sin(spherical.theta);
            offset.y = spherical.radius * Math.cos(spherical.phi);
            offset.z = sinPhiRadius * Math.cos(spherical.theta);

            // Apply updated values to object
            object.position.copy(this.target).add(offset);
            object.lookAt(this.target);

            // Apply inertia to values
            sphericalDelta.theta *= inertia;
            sphericalDelta.phi *= inertia;
            panDelta.multiply(inertia);

            // Reset scale every frame to avoid applying scale multiple times
            sphericalDelta.radius = 1;
        };

        // Updates internals with new position
        this.forcePosition = () => {
            offset.copy(object.position).sub(this.target);
            spherical.radius = sphericalTarget.radius = offset.distance();
            spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
            spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
            object.lookAt(this.target);
        };

        // Everything below here just updates panDelta and sphericalDelta
        // Using those two objects' values, the orbit is calculated

        const rotateStart = new Vec2();
        const panStart = new Vec2();
        const dollyStart = new Vec2();

        let state = STATE.NONE;
        this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };

        function getZoomScale() {
            return Math.pow(0.95, zoomSpeed);
        }

        function panLeft(distance, m) {
            tempVec3$2.set(m[0], m[1], m[2]);
            tempVec3$2.multiply(-distance);
            panDelta.add(tempVec3$2);
        }

        function panUp(distance, m) {
            tempVec3$2.set(m[4], m[5], m[6]);
            tempVec3$2.multiply(distance);
            panDelta.add(tempVec3$2);
        }

        const pan = (deltaX, deltaY) => {
            let el = element === document ? document.body : element;
            tempVec3$2.copy(object.position).sub(this.target);
            let targetDistance = tempVec3$2.distance();
            targetDistance *= Math.tan((((object.fov || 45) / 2) * Math.PI) / 180.0);
            panLeft((2 * deltaX * targetDistance) / el.clientHeight, object.matrix);
            panUp((2 * deltaY * targetDistance) / el.clientHeight, object.matrix);
        };

        function dolly(dollyScale) {
            sphericalDelta.radius /= dollyScale;
        }

        function handleAutoRotate() {
            const angle = ((2 * Math.PI) / 60 / 60) * autoRotateSpeed;
            sphericalDelta.theta -= angle;
        }

        function handleMoveRotate(x, y) {
            tempVec2a.set(x, y);
            tempVec2b.sub(tempVec2a, rotateStart).multiply(rotateSpeed);
            let el = element === document ? document.body : element;
            sphericalDelta.theta -= (2 * Math.PI * tempVec2b.x) / el.clientHeight;
            sphericalDelta.phi -= (2 * Math.PI * tempVec2b.y) / el.clientHeight;
            rotateStart.copy(tempVec2a);
        }

        function handleMouseMoveDolly(e) {
            tempVec2a.set(e.clientX, e.clientY);
            tempVec2b.sub(tempVec2a, dollyStart);
            if (tempVec2b.y > 0) {
                dolly(getZoomScale());
            } else if (tempVec2b.y < 0) {
                dolly(1 / getZoomScale());
            }
            dollyStart.copy(tempVec2a);
        }

        function handleMovePan(x, y) {
            tempVec2a.set(x, y);
            tempVec2b.sub(tempVec2a, panStart).multiply(panSpeed);
            pan(tempVec2b.x, tempVec2b.y);
            panStart.copy(tempVec2a);
        }

        function handleTouchStartDollyPan(e) {
            if (enableZoom) {
                let dx = e.touches[0].pageX - e.touches[1].pageX;
                let dy = e.touches[0].pageY - e.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                dollyStart.set(0, distance);
            }

            if (enablePan) {
                let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
                let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
                panStart.set(x, y);
            }
        }

        function handleTouchMoveDollyPan(e) {
            if (enableZoom) {
                let dx = e.touches[0].pageX - e.touches[1].pageX;
                let dy = e.touches[0].pageY - e.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                tempVec2a.set(0, distance);
                tempVec2b.set(0, Math.pow(tempVec2a.y / dollyStart.y, zoomSpeed));
                dolly(tempVec2b.y);
                dollyStart.copy(tempVec2a);
            }

            if (enablePan) {
                let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
                let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
                handleMovePan(x, y);
            }
        }

        const onMouseDown = (e) => {
            if (!this.enabled) return;

            switch (e.button) {
                case this.mouseButtons.ORBIT:
                    if (enableRotate === false) return;
                    rotateStart.set(e.clientX, e.clientY);
                    state = STATE.ROTATE;
                    break;
                case this.mouseButtons.ZOOM:
                    if (enableZoom === false) return;
                    dollyStart.set(e.clientX, e.clientY);
                    state = STATE.DOLLY;
                    break;
                case this.mouseButtons.PAN:
                    if (enablePan === false) return;
                    panStart.set(e.clientX, e.clientY);
                    state = STATE.PAN;
                    break;
            }

            if (state !== STATE.NONE) {
                window.addEventListener('mousemove', onMouseMove, false);
                window.addEventListener('mouseup', onMouseUp, false);
            }
        };

        const onMouseMove = (e) => {
            if (!this.enabled) return;

            switch (state) {
                case STATE.ROTATE:
                    if (enableRotate === false) return;
                    handleMoveRotate(e.clientX, e.clientY);
                    break;
                case STATE.DOLLY:
                    if (enableZoom === false) return;
                    handleMouseMoveDolly(e);
                    break;
                case STATE.PAN:
                    if (enablePan === false) return;
                    handleMovePan(e.clientX, e.clientY);
                    break;
            }
        };

        const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove, false);
            window.removeEventListener('mouseup', onMouseUp, false);
            state = STATE.NONE;
        };

        const onMouseWheel = (e) => {
            if (!this.enabled || !enableZoom || (state !== STATE.NONE && state !== STATE.ROTATE)) return;
            e.stopPropagation();
            e.preventDefault();

            if (e.deltaY < 0) {
                dolly(1 / getZoomScale());
            } else if (e.deltaY > 0) {
                dolly(getZoomScale());
            }
        };

        const onTouchStart = (e) => {
            if (!this.enabled) return;
            e.preventDefault();

            switch (e.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
                    state = STATE.ROTATE;
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchStartDollyPan(e);
                    state = STATE.DOLLY_PAN;
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchMove = (e) => {
            if (!this.enabled) return;
            e.preventDefault();
            e.stopPropagation();

            switch (e.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchMoveDollyPan(e);
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchEnd = () => {
            if (!this.enabled) return;
            state = STATE.NONE;
        };

        const onContextMenu = (e) => {
            if (!this.enabled) return;
            e.preventDefault();
        };

        function addHandlers() {
            element.addEventListener('contextmenu', onContextMenu, false);
            element.addEventListener('mousedown', onMouseDown, false);
            element.addEventListener('wheel', onMouseWheel, { passive: false });
            element.addEventListener('touchstart', onTouchStart, { passive: false });
            element.addEventListener('touchend', onTouchEnd, false);
            element.addEventListener('touchmove', onTouchMove, { passive: false });
        }

        this.remove = function () {
            element.removeEventListener('contextmenu', onContextMenu);
            element.removeEventListener('mousedown', onMouseDown);
            element.removeEventListener('wheel', onMouseWheel);
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
            element.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        addHandlers();
    }

    // TODO: barycentric code shouldn't be here, but where?

    const tempVec2a$1 = new Vec2();
    const tempVec2b$1 = new Vec2();
    const tempVec2c = new Vec2();

    const tempVec3a$1 = new Vec3();
    const tempVec3b$1 = new Vec3();
    const tempVec3c = new Vec3();
    const tempVec3d = new Vec3();
    const tempVec3e = new Vec3();
    const tempVec3f = new Vec3();
    const tempVec3g = new Vec3();
    const tempVec3h = new Vec3();
    const tempVec3i = new Vec3();
    const tempVec3j = new Vec3();
    const tempVec3k = new Vec3();

    const tempMat4$1 = new Mat4();

    class Raycast {
        constructor() {
            this.origin = new Vec3();
            this.direction = new Vec3();
        }

        // Set ray from mouse unprojection
        castMouse(camera, mouse = [0, 0]) {
            if (camera.type === 'orthographic') {
                // Set origin
                // Since camera is orthographic, origin is not the camera position
                const { left, right, bottom, top, zoom } = camera;
                const x = left / zoom + ((right - left) / zoom) * (mouse[0] * 0.5 + 0.5);
                const y = bottom / zoom + ((top - bottom) / zoom) * (mouse[1] * 0.5 + 0.5);
                this.origin.set(x, y, 0);
                this.origin.applyMatrix4(camera.worldMatrix);

                // Set direction
                // https://community.khronos.org/t/get-direction-from-transformation-matrix-or-quat/65502/2
                this.direction.x = -camera.worldMatrix[8];
                this.direction.y = -camera.worldMatrix[9];
                this.direction.z = -camera.worldMatrix[10];
            } else {
                // Set origin
                camera.worldMatrix.getTranslation(this.origin);

                // Set direction
                this.direction.set(mouse[0], mouse[1], 0.5);
                camera.unproject(this.direction);
                this.direction.sub(this.origin).normalize();
            }
        }

        intersectBounds(meshes, { maxDistance, output = [] } = {}) {
            if (!Array.isArray(meshes)) meshes = [meshes];

            const invWorldMat4 = tempMat4$1;
            const origin = tempVec3a$1;
            const direction = tempVec3b$1;

            const hits = output;
            hits.length = 0;

            meshes.forEach((mesh) => {
                // Create bounds
                if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere();
                const bounds = mesh.geometry.bounds;
                invWorldMat4.inverse(mesh.worldMatrix);

                // Get max distance locally
                let localMaxDistance;
                if (maxDistance) {
                    direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                    localMaxDistance = maxDistance * direction.len();
                }

                // Take world space ray and make it object space to align with bounding box
                origin.copy(this.origin).applyMatrix4(invWorldMat4);
                direction.copy(this.direction).transformDirection(invWorldMat4);

                // Break out early if bounds too far away from origin
                if (maxDistance) {
                    if (origin.distance(bounds.center) - bounds.radius > localMaxDistance) return;
                }

                let localDistance = 0;

                // Check origin isn't inside bounds before testing intersection
                if (mesh.geometry.raycast === 'sphere') {
                    if (origin.distance(bounds.center) > bounds.radius) {
                        localDistance = this.intersectSphere(bounds, origin, direction);
                        if (!localDistance) return;
                    }
                } else {
                    if (
                        origin.x < bounds.min.x ||
                        origin.x > bounds.max.x ||
                        origin.y < bounds.min.y ||
                        origin.y > bounds.max.y ||
                        origin.z < bounds.min.z ||
                        origin.z > bounds.max.z
                    ) {
                        localDistance = this.intersectBox(bounds, origin, direction);
                        if (!localDistance) return;
                    }
                }

                if (maxDistance && localDistance > localMaxDistance) return;

                // Create object on mesh to avoid generating lots of objects
                if (!mesh.hit) mesh.hit = { localPoint: new Vec3(), point: new Vec3() };

                mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
                mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
                mesh.hit.distance = mesh.hit.point.distance(this.origin);

                hits.push(mesh);
            });

            hits.sort((a, b) => a.hit.distance - b.hit.distance);
            return hits;
        }

        intersectMeshes(meshes, { cullFace = true, maxDistance, includeUV = true, includeNormal = true, output = [] } = {}) {
            // Test bounds first before testing geometry
            const hits = this.intersectBounds(meshes, { maxDistance, output });
            if (!hits.length) return hits;

            const invWorldMat4 = tempMat4$1;
            const origin = tempVec3a$1;
            const direction = tempVec3b$1;
            const a = tempVec3c;
            const b = tempVec3d;
            const c = tempVec3e;
            const closestFaceNormal = tempVec3f;
            const faceNormal = tempVec3g;
            const barycoord = tempVec3h;
            const uvA = tempVec2a$1;
            const uvB = tempVec2b$1;
            const uvC = tempVec2c;

            for (let i = hits.length - 1; i >= 0; i--) {
                const mesh = hits[i];
                invWorldMat4.inverse(mesh.worldMatrix);

                // Get max distance locally
                let localMaxDistance;
                if (maxDistance) {
                    direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                    localMaxDistance = maxDistance * direction.len();
                }

                // Take world space ray and make it object space to align with bounding box
                origin.copy(this.origin).applyMatrix4(invWorldMat4);
                direction.copy(this.direction).transformDirection(invWorldMat4);

                let localDistance = 0;
                let closestA, closestB, closestC;

                const geometry = mesh.geometry;
                const attributes = geometry.attributes;
                const index = attributes.index;

                const start = Math.max(0, geometry.drawRange.start);
                const end = Math.min(index ? index.count : attributes.position.count, geometry.drawRange.start + geometry.drawRange.count);

                for (let j = start; j < end; j += 3) {
                    // Position attribute indices for each triangle
                    const ai = index ? index.data[j] : j;
                    const bi = index ? index.data[j + 1] : j + 1;
                    const ci = index ? index.data[j + 2] : j + 2;

                    a.fromArray(attributes.position.data, ai * 3);
                    b.fromArray(attributes.position.data, bi * 3);
                    c.fromArray(attributes.position.data, ci * 3);

                    const distance = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
                    if (!distance) continue;

                    // Too far away
                    if (maxDistance && distance > localMaxDistance) continue;

                    if (!localDistance || distance < localDistance) {
                        localDistance = distance;
                        closestA = ai;
                        closestB = bi;
                        closestC = ci;
                        closestFaceNormal.copy(faceNormal);
                    }
                }

                if (!localDistance) hits.splice(i, 1);

                // Update hit values from bounds-test
                mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
                mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
                mesh.hit.distance = mesh.hit.point.distance(this.origin);

                // Add unique hit objects on mesh to avoid generating lots of objects
                if (!mesh.hit.faceNormal) {
                    mesh.hit.localFaceNormal = new Vec3();
                    mesh.hit.faceNormal = new Vec3();
                    mesh.hit.uv = new Vec2();
                    mesh.hit.localNormal = new Vec3();
                    mesh.hit.normal = new Vec3();
                }

                // Add face normal data which is already computed
                mesh.hit.localFaceNormal.copy(closestFaceNormal);
                mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix);

                // Optional data, opt out to optimise a bit if necessary
                if (includeUV || includeNormal) {
                    // Calculate barycoords to find uv values at hit point
                    a.fromArray(attributes.position.data, closestA * 3);
                    b.fromArray(attributes.position.data, closestB * 3);
                    c.fromArray(attributes.position.data, closestC * 3);
                    this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
                }

                if (includeUV && attributes.uv) {
                    uvA.fromArray(attributes.uv.data, closestA * 2);
                    uvB.fromArray(attributes.uv.data, closestB * 2);
                    uvC.fromArray(attributes.uv.data, closestC * 2);
                    mesh.hit.uv.set(
                        uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z,
                        uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z
                    );
                }

                if (includeNormal && attributes.normal) {
                    a.fromArray(attributes.normal.data, closestA * 3);
                    b.fromArray(attributes.normal.data, closestB * 3);
                    c.fromArray(attributes.normal.data, closestC * 3);
                    mesh.hit.localNormal.set(
                        a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z,
                        a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z,
                        a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z
                    );

                    mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
                }
            }

            hits.sort((a, b) => a.hit.distance - b.hit.distance);
            return hits;
        }

        intersectSphere(sphere, origin = this.origin, direction = this.direction) {
            const ray = tempVec3c;
            ray.sub(sphere.center, origin);
            const tca = ray.dot(direction);
            const d2 = ray.dot(ray) - tca * tca;
            const radius2 = sphere.radius * sphere.radius;
            if (d2 > radius2) return 0;
            const thc = Math.sqrt(radius2 - d2);
            const t0 = tca - thc;
            const t1 = tca + thc;
            if (t0 < 0 && t1 < 0) return 0;
            if (t0 < 0) return t1;
            return t0;
        }

        // Ray AABB - Ray Axis aligned bounding box testing
        intersectBox(box, origin = this.origin, direction = this.direction) {
            let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
            const invdirx = 1 / direction.x;
            const invdiry = 1 / direction.y;
            const invdirz = 1 / direction.z;
            const min = box.min;
            const max = box.max;
            tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
            tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
            tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
            tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
            if (tmin > tYmax || tYmin > tmax) return 0;
            if (tYmin > tmin) tmin = tYmin;
            if (tYmax < tmax) tmax = tYmax;
            tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
            tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
            if (tmin > tZmax || tZmin > tmax) return 0;
            if (tZmin > tmin) tmin = tZmin;
            if (tZmax < tmax) tmax = tZmax;
            if (tmax < 0) return 0;
            return tmin >= 0 ? tmin : tmax;
        }

        intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
            // from https://github.com/mrdoob/three.js/blob/master/src/math/Ray.js
            // which is from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
            const edge1 = tempVec3h;
            const edge2 = tempVec3i;
            const diff = tempVec3j;
            edge1.sub(b, a);
            edge2.sub(c, a);
            normal.cross(edge1, edge2);
            let DdN = direction.dot(normal);
            if (!DdN) return 0;
            let sign;
            if (DdN > 0) {
                if (backfaceCulling) return 0;
                sign = 1;
            } else {
                sign = -1;
                DdN = -DdN;
            }
            diff.sub(origin, a);
            let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
            if (DdQxE2 < 0) return 0;
            let DdE1xQ = sign * direction.dot(edge1.cross(diff));
            if (DdE1xQ < 0) return 0;
            if (DdQxE2 + DdE1xQ > DdN) return 0;
            let QdN = -sign * diff.dot(normal);
            if (QdN < 0) return 0;
            return QdN / DdN;
        }

        getBarycoord(point, a, b, c, target = tempVec3h) {
            // From https://github.com/mrdoob/three.js/blob/master/src/math/Triangle.js
            // static/instance method to calculate barycentric coordinates
            // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
            const v0 = tempVec3i;
            const v1 = tempVec3j;
            const v2 = tempVec3k;
            v0.sub(c, a);
            v1.sub(b, a);
            v2.sub(point, a);
            const dot00 = v0.dot(v0);
            const dot01 = v0.dot(v1);
            const dot02 = v0.dot(v2);
            const dot11 = v1.dot(v1);
            const dot12 = v1.dot(v2);
            const denom = dot00 * dot11 - dot01 * dot01;
            if (denom === 0) return target.set(-2, -1, -1);
            const invDenom = 1 / denom;
            const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
            const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
            return target.set(1 - u - v, v, u);
        }
    }

    const CATMULLROM = 'catmullrom';
    const CUBICBEZIER = 'cubicbezier';
    const QUADRATICBEZIER = 'quadraticbezier';

    // temp
    const _a0 = new Vec3(),
        _a1 = new Vec3(),
        _a2 = new Vec3(),
        _a3 = new Vec3();

    /**
     * Get the control points of cubic bezier curve.
     * @param {*} i
     * @param {*} a
     * @param {*} b
     */
    function getCtrlPoint(points, i, a = 0.168, b = 0.168) {
        if (i < 1) {
            _a0.sub(points[1], points[0]).scale(a).add(points[0]);
        } else {
            _a0.sub(points[i + 1], points[i - 1])
                .scale(a)
                .add(points[i]);
        }
        if (i > points.length - 3) {
            const last = points.length - 1;
            _a1.sub(points[last - 1], points[last])
                .scale(b)
                .add(points[last]);
        } else {
            _a1.sub(points[i], points[i + 2])
                .scale(b)
                .add(points[i + 1]);
        }
        return [_a0.clone(), _a1.clone()];
    }

    function getQuadraticBezierPoint(t, p0, c0, p1) {
        const k = 1 - t;
        _a0.copy(p0).scale(k ** 2);
        _a1.copy(c0).scale(2 * k * t);
        _a2.copy(p1).scale(t ** 2);
        const ret = new Vec3();
        ret.add(_a0, _a1).add(_a2);
        return ret;
    }

    function getCubicBezierPoint(t, p0, c0, c1, p1) {
        const k = 1 - t;
        _a0.copy(p0).scale(k ** 3);
        _a1.copy(c0).scale(3 * k ** 2 * t);
        _a2.copy(c1).scale(3 * k * t ** 2);
        _a3.copy(p1).scale(t ** 3);
        const ret = new Vec3();
        ret.add(_a0, _a1).add(_a2).add(_a3);
        return ret;
    }

    class Curve {
        constructor({ points = [new Vec3(0, 0, 0), new Vec3(0, 1, 0), new Vec3(1, 1, 0), new Vec3(1, 0, 0)], divisions = 12, type = CATMULLROM } = {}) {
            this.points = points;
            this.divisions = divisions;
            this.type = type;
        }

        _getQuadraticBezierPoints(divisions = this.divisions) {
            const points = [];
            const count = this.points.length;

            if (count < 3) {
                console.warn('Not enough points provided.');
                return [];
            }

            const p0 = this.points[0];
            let c0 = this.points[1],
                p1 = this.points[2];

            for (let i = 0; i <= divisions; i++) {
                const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
                points.push(p);
            }

            let offset = 3;
            while (count - offset > 0) {
                p0.copy(p1);
                c0 = p1.scale(2).sub(c0);
                p1 = this.points[offset];
                for (let i = 1; i <= divisions; i++) {
                    const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
                    points.push(p);
                }
                offset++;
            }

            return points;
        }

        _getCubicBezierPoints(divisions = this.divisions) {
            const points = [];
            const count = this.points.length;

            if (count < 4) {
                console.warn('Not enough points provided.');
                return [];
            }

            let p0 = this.points[0],
                c0 = this.points[1],
                c1 = this.points[2],
                p1 = this.points[3];

            for (let i = 0; i <= divisions; i++) {
                const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
                points.push(p);
            }

            let offset = 4;
            while (count - offset > 1) {
                p0.copy(p1);
                c0 = p1.scale(2).sub(c1);
                c1 = this.points[offset];
                p1 = this.points[offset + 1];
                for (let i = 1; i <= divisions; i++) {
                    const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
                    points.push(p);
                }
                offset += 2;
            }

            return points;
        }

        _getCatmullRomPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
            const points = [];
            const count = this.points.length;

            if (count <= 2) {
                return this.points;
            }

            let p0;
            this.points.forEach((p, i) => {
                if (i === 0) {
                    p0 = p;
                } else {
                    const [c0, c1] = getCtrlPoint(this.points, i - 1, a, b);
                    const c = new Curve({
                        points: [p0, c0, c1, p],
                        type: CUBICBEZIER,
                    });
                    points.pop();
                    points.push(...c.getPoints(divisions));
                    p0 = p;
                }
            });

            return points;
        }

        getPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
            const type = this.type;

            if (type === QUADRATICBEZIER) {
                return this._getQuadraticBezierPoints(divisions);
            }

            if (type === CUBICBEZIER) {
                return this._getCubicBezierPoints(divisions);
            }

            if (type === CATMULLROM) {
                return this._getCatmullRomPoints(divisions, a, b);
            }

            return this.points;
        }
    }

    Curve.CATMULLROM = CATMULLROM;
    Curve.CUBICBEZIER = CUBICBEZIER;
    Curve.QUADRATICBEZIER = QUADRATICBEZIER;

    // TODO: Destroy render targets if size changed and exists

    class Post {
        constructor(
            gl,
            {
                width,
                height,
                dpr,
                wrapS = gl.CLAMP_TO_EDGE,
                wrapT = gl.CLAMP_TO_EDGE,
                minFilter = gl.LINEAR,
                magFilter = gl.LINEAR,
                geometry = new Triangle(gl),
                targetOnly = null,
            } = {}
        ) {
            this.gl = gl;

            this.options = { wrapS, wrapT, minFilter, magFilter };

            this.passes = [];

            this.geometry = geometry;

            this.uniform = { value: null };
            this.targetOnly = targetOnly;

            const fbo = (this.fbo = {
                read: null,
                write: null,
                swap: () => {
                    let temp = fbo.read;
                    fbo.read = fbo.write;
                    fbo.write = temp;
                },
            });

            this.resize({ width, height, dpr });
        }

        addPass({ vertex = defaultVertex, fragment = defaultFragment, uniforms = {}, textureUniform = 'tMap', enabled = true } = {}) {
            uniforms[textureUniform] = { value: this.fbo.read.texture };

            const program = new Program(this.gl, { vertex, fragment, uniforms });
            const mesh = new Mesh(this.gl, { geometry: this.geometry, program });

            const pass = {
                mesh,
                program,
                uniforms,
                enabled,
                textureUniform,
            };

            this.passes.push(pass);
            return pass;
        }

        resize({ width, height, dpr } = {}) {
            if (dpr) this.dpr = dpr;
            if (width) {
                this.width = width;
                this.height = height || width;
            }

            dpr = this.dpr || this.gl.renderer.dpr;
            width = (this.width || this.gl.renderer.width) * dpr;
            height = (this.height || this.gl.renderer.height) * dpr;

            this.options.width = width;
            this.options.height = height;

            this.fbo.read = new RenderTarget(this.gl, this.options);
            this.fbo.write = new RenderTarget(this.gl, this.options);
        }

        // Uses same arguments as renderer.render
        render({ scene, camera, target = null, update = true, sort = true, frustumCull = true }) {
            const enabledPasses = this.passes.filter((pass) => pass.enabled);

            this.gl.renderer.render({
                scene,
                camera,
                target: enabledPasses.length || (!target && this.targetOnly) ? this.fbo.write : target,
                update,
                sort,
                frustumCull,
            });
            this.fbo.swap();

            enabledPasses.forEach((pass, i) => {
                pass.mesh.program.uniforms[pass.textureUniform].value = this.fbo.read.texture;
                this.gl.renderer.render({
                    scene: pass.mesh,
                    target: i === enabledPasses.length - 1 && (target || !this.targetOnly) ? target : this.fbo.write,
                    clear: true,
                });
                this.fbo.swap();
            });

            this.uniform.value = this.fbo.read.texture;
        }
    }

    const defaultVertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;

    const defaultFragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

    const prevPos = new Vec3();
    const prevRot = new Quat();
    const prevScl = new Vec3();

    const nextPos = new Vec3();
    const nextRot = new Quat();
    const nextScl = new Vec3();

    class Animation {
        constructor({ objects, data }) {
            this.objects = objects;
            this.data = data;
            this.elapsed = 0;
            this.weight = 1;
            this.duration = data.frames.length - 1;
        }

        update(totalWeight = 1, isSet) {
            const weight = isSet ? 1 : this.weight / totalWeight;
            const elapsed = this.elapsed % this.duration;

            const floorFrame = Math.floor(elapsed);
            const blend = elapsed - floorFrame;
            const prevKey = this.data.frames[floorFrame];
            const nextKey = this.data.frames[(floorFrame + 1) % this.duration];

            this.objects.forEach((object, i) => {
                prevPos.fromArray(prevKey.position, i * 3);
                prevRot.fromArray(prevKey.quaternion, i * 4);
                prevScl.fromArray(prevKey.scale, i * 3);

                nextPos.fromArray(nextKey.position, i * 3);
                nextRot.fromArray(nextKey.quaternion, i * 4);
                nextScl.fromArray(nextKey.scale, i * 3);

                prevPos.lerp(nextPos, blend);
                prevRot.slerp(nextRot, blend);
                prevScl.lerp(nextScl, blend);

                object.position.lerp(prevPos, weight);
                object.quaternion.slerp(prevRot, weight);
                object.scale.lerp(prevScl, weight);
            });
        }
    }

    const tempMat4$2 = new Mat4();

    class Skin extends Mesh {
        constructor(gl, { rig, geometry, program, mode = gl.TRIANGLES } = {}) {
            super(gl, { geometry, program, mode });

            this.createBones(rig);
            this.createBoneTexture();
            this.animations = [];

            Object.assign(this.program.uniforms, {
                boneTexture: { value: this.boneTexture },
                boneTextureSize: { value: this.boneTextureSize },
            });
        }

        createBones(rig) {
            // Create root so that can simply update world matrix of whole skeleton
            this.root = new Transform();

            // Create bones
            this.bones = [];
            if (!rig.bones || !rig.bones.length) return;
            for (let i = 0; i < rig.bones.length; i++) {
                const bone = new Transform();

                // Set initial values (bind pose)
                bone.position.fromArray(rig.bindPose.position, i * 3);
                bone.quaternion.fromArray(rig.bindPose.quaternion, i * 4);
                bone.scale.fromArray(rig.bindPose.scale, i * 3);

                this.bones.push(bone);
            }

            // Once created, set the hierarchy
            rig.bones.forEach((data, i) => {
                this.bones[i].name = data.name;
                if (data.parent === -1) return this.bones[i].setParent(this.root);
                this.bones[i].setParent(this.bones[data.parent]);
            });

            // Then update to calculate world matrices
            this.root.updateMatrixWorld(true);

            // Store inverse of bind pose to calculate differences
            this.bones.forEach((bone) => {
                bone.bindInverse = new Mat4(...bone.worldMatrix).inverse();
            });
        }

        createBoneTexture() {
            if (!this.bones.length) return;
            const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
            this.boneMatrices = new Float32Array(size * size * 4);
            this.boneTextureSize = size;
            this.boneTexture = new Texture(this.gl, {
                image: this.boneMatrices,
                generateMipmaps: false,
                type: this.gl.FLOAT,
                internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
                flipY: false,
                width: size,
            });
        }

        addAnimation(data) {
            const animation = new Animation({ objects: this.bones, data });
            this.animations.push(animation);
            return animation;
        }

        update() {
            // Calculate combined animation weight
            let total = 0;
            this.animations.forEach((animation) => (total += animation.weight));

            this.animations.forEach((animation, i) => {
                // force first animation to set in order to reset frame
                animation.update(total, i === 0);
            });
        }

        draw({ camera } = {}) {
            // Update world matrices manually, as not part of scene graph
            this.root.updateMatrixWorld(true);

            // Update bone texture
            this.bones.forEach((bone, i) => {
                // Find difference between current and bind pose
                tempMat4$2.multiply(bone.worldMatrix, bone.bindInverse);
                this.boneMatrices.set(tempMat4$2, i * 16);
            });
            if (this.boneTexture) this.boneTexture.needsUpdate = true;

            super.draw({ camera });
        }
    }

    function Text({
        font,
        text,
        width = Infinity,
        align = 'left',
        size = 1,
        letterSpacing = 0,
        lineHeight = 1.4,
        wordSpacing = 0,
        wordBreak = false,
    }) {
        const _this = this;
        let glyphs, buffers;
        let fontHeight, baseline, scale;

        const newline = /\n/;
        const whitespace = /\s/;

        {
            parseFont();
            createGeometry();
        }

        function parseFont() {
            glyphs = {};
            font.chars.forEach((d) => (glyphs[d.char] = d));
        }

        function createGeometry() {
            fontHeight = font.common.lineHeight;
            baseline = font.common.base;

            // Use baseline so that actual text height is as close to 'size' value as possible
            scale = size / baseline;

            // Strip spaces and newlines to get actual character length for buffers
            let chars = text.replace(/[ \n]/g, '');
            let numChars = chars.length;

            // Create output buffers
            buffers = {
                position: new Float32Array(numChars * 4 * 3),
                uv: new Float32Array(numChars * 4 * 2),
                id: new Float32Array(numChars * 4),
                index: new Uint16Array(numChars * 6),
            };

            // Set values for buffers that don't require calculation
            for (let i = 0; i < numChars; i++) {
                buffers.id[i] = i;
                buffers.index.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6);
            }

            layout();
        }

        function layout() {
            const lines = [];

            let cursor = 0;

            let wordCursor = 0;
            let wordWidth = 0;
            let line = newLine();

            function newLine() {
                const line = {
                    width: 0,
                    glyphs: [],
                };
                lines.push(line);
                wordCursor = cursor;
                wordWidth = 0;
                return line;
            }

            let maxTimes = 100;
            let count = 0;
            while (cursor < text.length && count < maxTimes) {
                count++;

                const char = text[cursor];

                // Skip whitespace at start of line
                if (!line.width && whitespace.test(char)) {
                    cursor++;
                    wordCursor = cursor;
                    wordWidth = 0;
                    continue;
                }

                // If newline char, skip to next line
                if (newline.test(char)) {
                    cursor++;
                    line = newLine();
                    continue;
                }

                const glyph = glyphs[char] || glyphs[' '];

                // Find any applicable kern pairs
                if (line.glyphs.length) {
                    const prevGlyph = line.glyphs[line.glyphs.length - 1][0];
                    let kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
                    line.width += kern;
                    wordWidth += kern;
                }

                // add char to line
                line.glyphs.push([glyph, line.width]);

                // calculate advance for next glyph
                let advance = 0;

                // If whitespace, update location of current word for line breaks
                if (whitespace.test(char)) {
                    wordCursor = cursor;
                    wordWidth = 0;

                    // Add wordspacing
                    advance += wordSpacing * size;
                } else {
                    // Add letterspacing
                    advance += letterSpacing * size;
                }

                advance += glyph.xadvance * scale;

                line.width += advance;
                wordWidth += advance;

                // If width defined
                if (line.width > width) {
                    // If can break words, undo latest glyph if line not empty and create new line
                    if (wordBreak && line.glyphs.length > 1) {
                        line.width -= advance;
                        line.glyphs.pop();
                        line = newLine();
                        continue;

                        // If not first word, undo current word and cursor and create new line
                    } else if (!wordBreak && wordWidth !== line.width) {
                        let numGlyphs = cursor - wordCursor + 1;
                        line.glyphs.splice(-numGlyphs, numGlyphs);
                        cursor = wordCursor;
                        line.width -= wordWidth;
                        line = newLine();
                        continue;
                    }
                }

                cursor++;
            }

            // Remove last line if empty
            if (!line.width) lines.pop();

            populateBuffers(lines);
        }

        function populateBuffers(lines) {
            const texW = font.common.scaleW;
            const texH = font.common.scaleH;

            // For all fonts tested, a little offset was needed to be right on the baseline, hence 0.07.
            let y = 0.07 * size;
            let j = 0;

            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                let line = lines[lineIndex];

                for (let i = 0; i < line.glyphs.length; i++) {
                    const glyph = line.glyphs[i][0];
                    let x = line.glyphs[i][1];

                    if (align === 'center') {
                        x -= line.width * 0.5;
                    } else if (align === 'right') {
                        x -= line.width;
                    }

                    // If space, don't add to geometry
                    if (whitespace.test(glyph.char)) continue;

                    // Apply char sprite offsets
                    x += glyph.xoffset * scale;
                    y -= glyph.yoffset * scale;

                    // each letter is a quad. axis bottom left
                    let w = glyph.width * scale;
                    let h = glyph.height * scale;
                    buffers.position.set([x, y - h, 0, x, y, 0, x + w, y - h, 0, x + w, y, 0], j * 4 * 3);

                    let u = glyph.x / texW;
                    let uw = glyph.width / texW;
                    let v = 1.0 - glyph.y / texH;
                    let vh = glyph.height / texH;
                    buffers.uv.set([u, v - vh, u, v, u + uw, v - vh, u + uw, v], j * 4 * 2);

                    // Reset cursor to baseline
                    y += glyph.yoffset * scale;

                    j++;
                }

                y -= size * lineHeight;
            }

            _this.buffers = buffers;
            _this.numLines = lines.length;
            _this.height = _this.numLines * size * lineHeight;
        }

        function getKernPairOffset(id1, id2) {
            for (let i = 0; i < font.kernings.length; i++) {
                let k = font.kernings[i];
                if (k.first < id1) continue;
                if (k.second < id2) continue;
                if (k.first > id1) return 0;
                if (k.first === id1 && k.second > id2) return 0;
                return k.amount;
            }
            return 0;
        }

        // Update buffers to layout with new layout
        this.resize = function (options) {
            ({ width } = options);
            layout();
        };

        // Completely change text (like creating new Text)
        this.update = function (options) {
            ({ text } = options);
            createGeometry();
        };
    }

    const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

    const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;

    function NormalProgram(gl) {
        return new Program(gl, {
            vertex: vertex,
            fragment: fragment,
            cullFace: null,
        });
    }

    class Flowmap {
        constructor(
            gl,
            {
                size = 128, // default size of the render targets
                falloff = 0.3, // size of the stamp, percentage of the size
                alpha = 1, // opacity of the stamp
                dissipation = 0.98, // affects the speed that the stamp fades. Closer to 1 is slower
                type, // Pass in gl.FLOAT to force it, defaults to gl.HALF_FLOAT
            } = {}
        ) {
            const _this = this;
            this.gl = gl;

            // output uniform containing render target textures
            this.uniform = { value: null };

            this.mask = {
                read: null,
                write: null,

                // Helper function to ping pong the render targets and update the uniform
                swap: () => {
                    let temp = _this.mask.read;
                    _this.mask.read = _this.mask.write;
                    _this.mask.write = temp;
                    _this.uniform.value = _this.mask.read.texture;
                },
            };

            {
                createFBOs();

                this.aspect = 1;
                this.mouse = new Vec2();
                this.velocity = new Vec2();

                this.mesh = initProgram();
            }

            function createFBOs() {
                // Requested type not supported, fall back to half float
                if (!type) type = gl.HALF_FLOAT || gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES;

                let minFilter = (() => {
                    if (gl.renderer.isWebgl2) return gl.LINEAR;
                    if (gl.renderer.extensions[`OES_texture_${type === gl.FLOAT ? '' : 'half_'}float_linear`]) return gl.LINEAR;
                    return gl.NEAREST;
                })();

                const options = {
                    width: size,
                    height: size,
                    type,
                    format: gl.RGBA,
                    internalFormat: gl.renderer.isWebgl2 ? (type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F) : gl.RGBA,
                    minFilter,
                    depth: false,
                };

                _this.mask.read = new RenderTarget(gl, options);
                _this.mask.write = new RenderTarget(gl, options);
                _this.mask.swap();
            }

            function initProgram() {
                return new Mesh(gl, {
                    // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
                    geometry: new Triangle(gl),

                    program: new Program(gl, {
                        vertex: vertex$1,
                        fragment: fragment$1,
                        uniforms: {
                            tMap: _this.uniform,

                            uFalloff: { value: falloff * 0.5 },
                            uAlpha: { value: alpha },
                            uDissipation: { value: dissipation },

                            // User needs to update these
                            uAspect: { value: 1 },
                            uMouse: { value: _this.mouse },
                            uVelocity: { value: _this.velocity },
                        },
                        depthTest: false,
                    }),
                });
            }
        }

        update() {
            this.mesh.program.uniforms.uAspect.value = this.aspect;

            this.gl.renderer.render({
                scene: this.mesh,
                target: this.mask.write,
                clear: false,
            });
            this.mask.swap();
        }
    }

    const vertex$1 = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;

    const fragment$1 = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;

    class GPGPU {
        constructor(
            gl,
            {
                // Always pass in array of vec4s (RGBA values within texture)
                data = new Float32Array(16),
                geometry = new Triangle(gl),
                type, // Pass in gl.FLOAT to force it, defaults to gl.HALF_FLOAT
            }
        ) {
            this.gl = gl;
            const initialData = data;
            this.passes = [];
            this.geometry = geometry;
            this.dataLength = initialData.length / 4;

            // Windows and iOS only like power of 2 textures
            // Find smallest PO2 that fits data
            this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2));

            // Create coords for output texture
            this.coords = new Float32Array(this.dataLength * 2);
            for (let i = 0; i < this.dataLength; i++) {
                const x = (i % this.size) / this.size; // to add 0.5 to be center pixel ?
                const y = Math.floor(i / this.size) / this.size;
                this.coords.set([x, y], i * 2);
            }

            // Use original data if already correct length of PO2 texture, else copy to new array of correct length
            const floatArray = (() => {
                if (initialData.length === this.size * this.size * 4) {
                    return initialData;
                } else {
                    const a = new Float32Array(this.size * this.size * 4);
                    a.set(initialData);
                    return a;
                }
            })();

            // Create output texture uniform using input float texture with initial data
            this.uniform = {
                value: new Texture(gl, {
                    image: floatArray,
                    target: gl.TEXTURE_2D,
                    type: gl.FLOAT,
                    format: gl.RGBA,
                    internalFormat: gl.renderer.isWebgl2 ? gl.RGBA32F : gl.RGBA,
                    wrapS: gl.CLAMP_TO_EDGE,
                    wrapT: gl.CLAMP_TO_EDGE,
                    generateMipmaps: false,
                    minFilter: gl.NEAREST,
                    magFilter: gl.NEAREST,
                    width: this.size,
                    flipY: false,
                }),
            };

            // Create FBOs
            const options = {
                width: this.size,
                height: this.size,
                type: type || gl.HALF_FLOAT || gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES,
                format: gl.RGBA,
                internalFormat: gl.renderer.isWebgl2 ? (type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F) : gl.RGBA,
                minFilter: gl.NEAREST,
                depth: false,
                unpackAlignment: 1,
            };

            this.fbo = {
                read: new RenderTarget(gl, options),
                write: new RenderTarget(gl, options),
                swap: () => {
                    let temp = this.fbo.read;
                    this.fbo.read = this.fbo.write;
                    this.fbo.write = temp;
                    this.uniform.value = this.fbo.read.texture;
                },
            };
        }

        addPass({ vertex = defaultVertex$1, fragment = defaultFragment$1, uniforms = {}, textureUniform = 'tMap', enabled = true } = {}) {
            uniforms[textureUniform] = this.uniform;
            const program = new Program(this.gl, { vertex, fragment, uniforms });
            const mesh = new Mesh(this.gl, { geometry: this.geometry, program });

            const pass = {
                mesh,
                program,
                uniforms,
                enabled,
                textureUniform,
            };

            this.passes.push(pass);
            return pass;
        }

        render() {
            const enabledPasses = this.passes.filter((pass) => pass.enabled);

            enabledPasses.forEach((pass, i) => {
                this.gl.renderer.render({
                    scene: pass.mesh,
                    target: this.fbo.write,
                    clear: false,
                });
                this.fbo.swap();
            });
        }
    }

    const defaultVertex$1 = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;

    const defaultFragment$1 = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

    const tmp = new Vec3();

    class Polyline {
        constructor(
            gl,
            {
                points, // Array of Vec3s
                vertex = defaultVertex$2,
                fragment = defaultFragment$2,
                uniforms = {},
                attributes = {}, // For passing in custom attribs
            }
        ) {
            this.gl = gl;
            this.points = points;
            this.count = points.length;

            // Create buffers
            this.position = new Float32Array(this.count * 3 * 2);
            this.prev = new Float32Array(this.count * 3 * 2);
            this.next = new Float32Array(this.count * 3 * 2);
            const side = new Float32Array(this.count * 1 * 2);
            const uv = new Float32Array(this.count * 2 * 2);
            const index = new Uint16Array((this.count - 1) * 3 * 2);

            // Set static buffers
            for (let i = 0; i < this.count; i++) {
                side.set([-1, 1], i * 2);
                const v = i / (this.count - 1);
                uv.set([0, v, 1, v], i * 4);

                if (i === this.count - 1) continue;
                const ind = i * 2;
                index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
                index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
            }

            const geometry = (this.geometry = new Geometry(
                gl,
                Object.assign(attributes, {
                    position: { size: 3, data: this.position },
                    prev: { size: 3, data: this.prev },
                    next: { size: 3, data: this.next },
                    side: { size: 1, data: side },
                    uv: { size: 2, data: uv },
                    index: { size: 1, data: index },
                })
            ));

            // Populate dynamic buffers
            this.updateGeometry();

            if (!uniforms.uResolution) this.resolution = uniforms.uResolution = { value: new Vec2() };
            if (!uniforms.uDPR) this.dpr = uniforms.uDPR = { value: 1 };
            if (!uniforms.uThickness) this.thickness = uniforms.uThickness = { value: 1 };
            if (!uniforms.uColor) this.color = uniforms.uColor = { value: new Color('#000') };
            if (!uniforms.uMiter) this.miter = uniforms.uMiter = { value: 1 };

            // Set size uniforms' values
            this.resize();

            const program = (this.program = new Program(gl, {
                vertex,
                fragment,
                uniforms,
            }));

            this.mesh = new Mesh(gl, { geometry, program });
        }

        updateGeometry() {
            this.points.forEach((p, i) => {
                p.toArray(this.position, i * 3 * 2);
                p.toArray(this.position, i * 3 * 2 + 3);

                if (!i) {
                    // If first point, calculate prev using the distance to 2nd point
                    tmp.copy(p)
                        .sub(this.points[i + 1])
                        .add(p);
                    tmp.toArray(this.prev, i * 3 * 2);
                    tmp.toArray(this.prev, i * 3 * 2 + 3);
                } else {
                    p.toArray(this.next, (i - 1) * 3 * 2);
                    p.toArray(this.next, (i - 1) * 3 * 2 + 3);
                }

                if (i === this.points.length - 1) {
                    // If last point, calculate next using distance to 2nd last point
                    tmp.copy(p)
                        .sub(this.points[i - 1])
                        .add(p);
                    tmp.toArray(this.next, i * 3 * 2);
                    tmp.toArray(this.next, i * 3 * 2 + 3);
                } else {
                    p.toArray(this.prev, (i + 1) * 3 * 2);
                    p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
                }
            });

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.prev.needsUpdate = true;
            this.geometry.attributes.next.needsUpdate = true;
        }

        // Only need to call if not handling resolution uniforms manually
        resize() {
            // Update automatic uniforms if not overridden
            if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
            if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
        }
    }

    const defaultVertex$2 = /* glsl */ `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;

    const defaultFragment$2 = /* glsl */ `
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;

    class Shadow {
        constructor(gl, { light = new Camera(gl), width = 1024, height = width }) {
            this.gl = gl;

            this.light = light;

            this.target = new RenderTarget(gl, { width, height });

            this.depthProgram = new Program(gl, {
                vertex: defaultVertex$3,
                fragment: defaultFragment$3,
                cullFace: null,
            });

            this.castMeshes = [];
        }

        add({
            mesh,
            receive = true,
            cast = true,
            vertex = defaultVertex$3,
            fragment = defaultFragment$3,
            uniformProjection = 'shadowProjectionMatrix',
            uniformView = 'shadowViewMatrix',
            uniformTexture = 'tShadow',
        }) {
            // Add uniforms to existing program
            if (receive && !mesh.program.uniforms[uniformProjection]) {
                mesh.program.uniforms[uniformProjection] = { value: this.light.projectionMatrix };
                mesh.program.uniforms[uniformView] = { value: this.light.viewMatrix };
                mesh.program.uniforms[uniformTexture] = { value: this.target.texture };
            }

            if (!cast) return;
            this.castMeshes.push(mesh);

            // Store program for when switching between depth override
            mesh.colorProgram = mesh.program;

            // Check if depth program already attached
            if (mesh.depthProgram) return;

            // Use global depth override if nothing custom passed in
            if (vertex === defaultVertex$3 && fragment === defaultFragment$3) {
                mesh.depthProgram = this.depthProgram;
                return;
            }

            // Create custom override program
            mesh.depthProgram = new Program(this.gl, {
                vertex,
                fragment,
                cullFace: null,
            });
        }

        render({ scene }) {
            // For depth render, replace program with depth override.
            // Hide meshes not casting shadows.
            scene.traverse((node) => {
                if (!node.draw) return;
                if (!!~this.castMeshes.indexOf(node)) {
                    node.program = node.depthProgram;
                } else {
                    node.isForceVisibility = node.visible;
                    node.visible = false;
                }
            });

            // Render the depth shadow map using the light as the camera
            this.gl.renderer.render({
                scene,
                camera: this.light,
                target: this.target,
            });

            // Then switch the program back to the normal one
            scene.traverse((node) => {
                if (!node.draw) return;
                if (!!~this.castMeshes.indexOf(node)) {
                    node.program = node.colorProgram;
                } else {
                    node.visible = node.isForceVisibility;
                }
            });
        }
    }

    const defaultVertex$3 = /* glsl */ `
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

    const defaultFragment$3 = /* glsl */ `
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`;

    // TODO: Support cubemaps
    // Generate textures using https://github.com/TimvanScherpenzeel/texture-compressor

    class KTXTexture extends Texture {
        constructor(gl, { buffer, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, anisotropy = 0, minFilter, magFilter } = {}) {
            super(gl, {
                generateMipmaps: false,
                wrapS,
                wrapT,
                anisotropy,
                minFilter,
                magFilter,
            });

            if (buffer) return this.parseBuffer(buffer);
        }

        parseBuffer(buffer) {
            const ktx = new KhronosTextureContainer(buffer);
            ktx.mipmaps.isCompressedTexture = true;

            // Update texture
            this.image = ktx.mipmaps;
            this.internalFormat = ktx.glInternalFormat;
            if (ktx.numberOfMipmapLevels > 1) {
                if (this.minFilter === this.gl.LINEAR) this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
            } else {
                if (this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR) this.minFilter = this.gl.LINEAR;
            }

            // TODO: support cube maps
            // ktx.numberOfFaces
        }
    }

    function KhronosTextureContainer(buffer) {
        const idCheck = [0xab, 0x4b, 0x54, 0x58, 0x20, 0x31, 0x31, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a];
        const id = new Uint8Array(buffer, 0, 12);
        for (let i = 0; i < id.length; i++) if (id[i] !== idCheck[i]) return console.error('File missing KTX identifier');

        // TODO: Is this always 4? Tested: [android, macos]
        const size = Uint32Array.BYTES_PER_ELEMENT;
        const head = new DataView(buffer, 12, 13 * size);
        const littleEndian = head.getUint32(0, true) === 0x04030201;
        const glType = head.getUint32(1 * size, littleEndian);
        if (glType !== 0) return console.warn('only compressed formats currently supported');
        this.glInternalFormat = head.getUint32(4 * size, littleEndian);
        let width = head.getUint32(6 * size, littleEndian);
        let height = head.getUint32(7 * size, littleEndian);
        this.numberOfFaces = head.getUint32(10 * size, littleEndian);
        this.numberOfMipmapLevels = Math.max(1, head.getUint32(11 * size, littleEndian));
        const bytesOfKeyValueData = head.getUint32(12 * size, littleEndian);

        this.mipmaps = [];
        let offset = 12 + 13 * 4 + bytesOfKeyValueData;
        for (let level = 0; level < this.numberOfMipmapLevels; level++) {
            const levelSize = new Int32Array(buffer, offset, 1)[0]; // size per face, since not supporting array cubemaps
            offset += 4; // levelSize field
            for (let face = 0; face < this.numberOfFaces; face++) {
                const data = new Uint8Array(buffer, offset, levelSize);
                this.mipmaps.push({ data, width, height });
                offset += levelSize;
                offset += 3 - ((levelSize + 3) % 4); // add padding for odd sized image
            }
            width = width >> 1;
            height = height >> 1;
        }
    }

    // For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor

    let cache = {};
    const supportedExtensions = [];

    class TextureLoader {
        static load(
            gl,
            {
                src, // string or object of extension:src key-values
                // {
                //     pvrtc: '...ktx',
                //     s3tc: '...ktx',
                //     etc: '...ktx',
                //     etc1: '...ktx',
                //     astc: '...ktx',
                //     webp: '...webp',
                //     jpg: '...jpg',
                //     png: '...png',
                // }

                // Only props relevant to KTXTexture
                wrapS = gl.CLAMP_TO_EDGE,
                wrapT = gl.CLAMP_TO_EDGE,
                anisotropy = 0,

                // For regular images
                format = gl.RGBA,
                internalFormat = format,
                generateMipmaps = true,
                minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
                magFilter = gl.LINEAR,
                premultiplyAlpha = false,
                unpackAlignment = 4,
                flipY = true,
            } = {}
        ) {
            const support = this.getSupportedExtensions(gl);
            let ext = 'none';

            // If src is string, determine which format from the extension
            if (typeof src === 'string') {
                ext = src.split('.').pop().split('?')[0].toLowerCase();
            }

            // If src is object, use supported extensions and provided list to choose best option
            // Get first supported match, so put in order of preference
            if (typeof src === 'object') {
                for (const prop in src) {
                    if (support.includes(prop.toLowerCase())) {
                        ext = prop.toLowerCase();
                        src = src[prop];
                        break;
                    }
                }
            }

            // Stringify props
            const cacheID =
                src +
                wrapS +
                wrapT +
                anisotropy +
                format +
                internalFormat +
                generateMipmaps +
                minFilter +
                magFilter +
                premultiplyAlpha +
                unpackAlignment +
                flipY +
                gl.renderer.id;

            // Check cache for existing texture
            if (cache[cacheID]) return cache[cacheID];

            let texture;
            switch (ext) {
                case 'ktx':
                case 'pvrtc':
                case 's3tc':
                case 'etc':
                case 'etc1':
                case 'astc':
                    // Load compressed texture using KTX format
                    texture = new KTXTexture(gl, {
                        src,
                        wrapS,
                        wrapT,
                        anisotropy,
                        minFilter,
                        magFilter,
                    });
                    texture.loaded = this.loadKTX(src, texture);
                    break;
                case 'webp':
                case 'jpg':
                case 'jpeg':
                case 'png':
                    texture = new Texture(gl, {
                        wrapS,
                        wrapT,
                        anisotropy,
                        format,
                        internalFormat,
                        generateMipmaps,
                        minFilter,
                        magFilter,
                        premultiplyAlpha,
                        unpackAlignment,
                        flipY,
                    });
                    texture.loaded = this.loadImage(gl, src, texture);
                    break;
                default:
                    console.warn('No supported format supplied');
                    texture = new Texture(gl);
            }

            texture.ext = ext;
            cache[cacheID] = texture;
            return texture;
        }

        static getSupportedExtensions(gl) {
            if (supportedExtensions.length) return supportedExtensions;

            const extensions = {
                pvrtc: gl.renderer.getExtension('WEBGL_compressed_texture_pvrtc') || gl.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
                s3tc:
                    gl.renderer.getExtension('WEBGL_compressed_texture_s3tc') ||
                    gl.renderer.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
                    gl.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'),
                etc: gl.renderer.getExtension('WEBGL_compressed_texture_etc'),
                etc1: gl.renderer.getExtension('WEBGL_compressed_texture_etc1'),
                astc: gl.renderer.getExtension('WEBGL_compressed_texture_astc'),
            };

            for (const ext in extensions) if (extensions[ext]) supportedExtensions.push(ext);

            // Check for WebP support
            if (detectWebP) supportedExtensions.push('webp');

            // Formats supported by all
            supportedExtensions.push('png', 'jpg');

            return supportedExtensions;
        }

        static loadKTX(src, texture) {
            return fetch(src)
                .then((res) => res.arrayBuffer())
                .then((buffer) => texture.parseBuffer(buffer));
        }

        static loadImage(gl, src, texture) {
            return decodeImage(src).then((imgBmp) => {
                // Catch non POT textures and update params to avoid errors
                if (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height)) {
                    if (texture.generateMipmaps) texture.generateMipmaps = false;
                    if (texture.minFilter === gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = gl.LINEAR;
                    if (texture.wrapS === gl.REPEAT) texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;
                }

                texture.image = imgBmp;

                // For createImageBitmap, close once uploaded
                texture.onUpdate = () => {
                    if (imgBmp.close) imgBmp.close();
                    texture.onUpdate = null;
                };

                return imgBmp;
            });
        }

        static clearCache() {
            cache = {};
        }
    }

    function detectWebP() {
        return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    function powerOfTwo(value) {
        return Math.log2(value) % 1 === 0;
    }

    function decodeImage(src) {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = '';
            img.src = src;

            // Only chrome's implementation of createImageBitmap is fully supported
            const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
            if (!!window.createImageBitmap && isChrome) {
                img.onload = () => {
                    createImageBitmap(img, {
                        imageOrientation: 'flipY',
                        premultiplyAlpha: 'none',
                    }).then((imgBmp) => {
                        resolve(imgBmp);
                    });
                };
            } else {
                img.onload = () => resolve(img);
            }
        });
    }

    const tmpVec3A = new Vec3();
    const tmpVec3B = new Vec3();
    const tmpVec3C = new Vec3();
    const tmpVec3D = new Vec3();

    const tmpQuatA = new Quat();
    const tmpQuatB = new Quat();
    const tmpQuatC = new Quat();
    const tmpQuatD = new Quat();

    class GLTFAnimation {
        constructor(data, weight = 1) {
            this.data = data;
            this.elapsed = 0;
            this.weight = weight;

            // Set to false to not apply modulo to elapsed against duration
            this.loop = true;

            // Find starting time as exports from blender (perhaps others too) don't always start from 0
            this.startTime = data.reduce((a, { times }) => Math.min(a, times[0]), Infinity);
            // Get largest final time in all channels to calculate duration
            this.endTime = data.reduce((a, { times }) => Math.max(a, times[times.length - 1]), 0);
            this.duration = this.endTime - this.startTime;
        }

        update(totalWeight = 1, isSet) {
            const weight = isSet ? 1 : this.weight / totalWeight;
            const elapsed = (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration)) + this.startTime;

            this.data.forEach(({ node, transform, interpolation, times, values }) => {
                // Get index of two time values elapsed is between
                const prevIndex =
                    Math.max(
                        1,
                        times.findIndex((t) => t > elapsed)
                    ) - 1;
                const nextIndex = prevIndex + 1;

                // Get linear blend/alpha between the two
                let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
                if (interpolation === 'STEP') alpha = 0;

                let prevVal = tmpVec3A;
                let prevTan = tmpVec3B;
                let nextTan = tmpVec3C;
                let nextVal = tmpVec3D;
                let size = 3;

                if (transform === 'quaternion') {
                    prevVal = tmpQuatA;
                    prevTan = tmpQuatB;
                    nextTan = tmpQuatC;
                    nextVal = tmpQuatD;
                    size = 4;
                }

                if (interpolation === 'CUBICSPLINE') {
                    // Get the prev and next values from the indices
                    prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
                    prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
                    nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
                    nextVal.fromArray(values, nextIndex * size * 3 + size * 1);

                    // interpolate for final value
                    prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
                    if (size === 4) prevVal.normalize();
                } else {
                    // Get the prev and next values from the indices
                    prevVal.fromArray(values, prevIndex * size);
                    nextVal.fromArray(values, nextIndex * size);

                    // interpolate for final value
                    if (size === 4) prevVal.slerp(nextVal, alpha);
                    else prevVal.lerp(nextVal, alpha);
                }

                // interpolate between multiple possible animations
                if (size === 4) node[transform].slerp(prevVal, weight);
                else node[transform].lerp(prevVal, weight);
            });
        }

        cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
            const t2 = t * t;
            const t3 = t2 * t;

            const s2 = 3 * t2 - 2 * t3;
            const s3 = t3 - t2;
            const s0 = 1 - s2;
            const s1 = s3 - t2 + t;

            for (let i = 0; i < prevVal.length; i++) {
                prevVal[i] = s0 * prevVal[i] + s1 * (1 - t) * prevTan[i] + s2 * nextVal[i] + s3 * t * nextTan[i];
            }

            return prevVal;
        }
    }

    const tempMat4$3 = new Mat4();
    const identity$3 = new Mat4();

    class GLTFSkin extends Mesh {
        constructor(gl, { skeleton, geometry, program, mode = gl.TRIANGLES } = {}) {
            super(gl, { geometry, program, mode });
            this.skeleton = skeleton;
            this.program = program;
            this.createBoneTexture();
            this.animations = [];
        }

        createBoneTexture() {
            if (!this.skeleton.joints.length) return;
            const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
            this.boneMatrices = new Float32Array(size * size * 4);
            this.boneTextureSize = size;
            this.boneTexture = new Texture(this.gl, {
                image: this.boneMatrices,
                generateMipmaps: false,
                type: this.gl.FLOAT,
                internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
                flipY: false,
                width: size,
            });
        }

        // addAnimation(data) {
        //     const animation = new Animation({ objects: this.bones, data });
        //     this.animations.push(animation);
        //     return animation;
        // }

        // updateAnimations() {
        //     // Calculate combined animation weight
        //     let total = 0;
        //     this.animations.forEach((animation) => (total += animation.weight));

        //     this.animations.forEach((animation, i) => {
        //         // force first animation to set in order to reset frame
        //         animation.update(total, i === 0);
        //     });
        // }

        updateUniforms() {
            // Update bone texture
            this.skeleton.joints.forEach((bone, i) => {
                // Find difference between current and bind pose
                tempMat4$3.multiply(bone.worldMatrix, bone.bindInverse);
                this.boneMatrices.set(tempMat4$3, i * 16);
            });
            if (this.boneTexture) this.boneTexture.needsUpdate = true;
        }

        draw({ camera } = {}) {
            if (!this.program.uniforms.boneTexture) {
                Object.assign(this.program.uniforms, {
                    boneTexture: { value: this.boneTexture },
                    boneTextureSize: { value: this.boneTextureSize },
                });
            }

            this.updateUniforms();

            // Switch the world matrix with identity to ignore any transforms
            // on the mesh itself - only use skeleton's transforms
            const _worldMatrix = this.worldMatrix;
            this.worldMatrix = identity$3;

            super.draw({ camera });

            // Switch back to leave identity untouched
            this.worldMatrix = _worldMatrix;
        }
    }

    // Supports
    // [x] Geometry
    // [ ] Sparse support
    // [x] Nodes and Hierarchy
    // [x] Instancing
    // [ ] Morph Targets
    // [x] Skins
    // [ ] Materials
    // [x] Textures
    // [x] Animation
    // [ ] Cameras
    // [ ] Extensions
    // [x] GLB support

    // TODO: Sparse accessor packing? For morph targets basically
    // TODO: init accessor missing bufferView with 0s
    // TODO: morph target animations
    // TODO: what to do if multiple instances are in different groups? Only uses local matrices
    // TODO: what if instancing isn't wanted? Eg collision maps
    // TODO: ie11 fallback for TextDecoder?

    const TYPE_ARRAY = {
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array,
        'image/jpeg': Uint8Array,
        'image/png': Uint8Array,
    };

    const TYPE_SIZE = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16,
    };

    const ATTRIBUTES = {
        POSITION: 'position',
        NORMAL: 'normal',
        TANGENT: 'tangent',
        TEXCOORD_0: 'uv',
        TEXCOORD_1: 'uv2',
        COLOR_0: 'color',
        WEIGHTS_0: 'skinWeight',
        JOINTS_0: 'skinIndex',
    };

    const TRANSFORMS = {
        translation: 'position',
        rotation: 'quaternion',
        scale: 'scale',
    };

    class GLTFLoader {
        static async load(gl, src) {
            const dir = src.split('/').slice(0, -1).join('/') + '/';

            // load main description json
            const desc = await this.parseDesc(src);

            return await this.parse(gl, desc, dir);
        }

        static async parse(gl, desc, dir) {
            if (desc.asset === undefined || desc.asset.version[0] < 2) console.warn('Only GLTF >=2.0 supported. Attempting to parse.');

            // Load buffers async
            const buffers = await this.loadBuffers(desc, dir);

            // Unbind current VAO so that new buffers don't get added to active mesh
            gl.renderer.bindVertexArray(null);

            // Create gl buffers from bufferViews
            const bufferViews = this.parseBufferViews(gl, desc, buffers);

            // Create images from either bufferViews or separate image files
            const images = this.parseImages(gl, desc, dir, bufferViews);

            const textures = this.parseTextures(gl, desc, images);

            // Just pass through material data for now
            const materials = this.parseMaterials(gl, desc, textures);

            // Fetch the inverse bind matrices for skeleton joints
            const skins = this.parseSkins(gl, desc, bufferViews);

            // Create geometries for each mesh primitive
            const meshes = this.parseMeshes(gl, desc, bufferViews, materials, skins);

            // Create transforms, meshes and hierarchy
            const nodes = this.parseNodes(gl, desc, meshes, skins);

            // Place nodes in skeletons
            this.populateSkins(skins, nodes);

            // Create animation handlers
            const animations = this.parseAnimations(gl, desc, nodes, bufferViews);

            // Get top level nodes for each scene
            const scenes = this.parseScenes(desc, nodes);
            const scene = scenes[desc.scene];

            // Remove null nodes (instanced transforms)
            for (let i = nodes.length; i >= 0; i--) if (!nodes[i]) nodes.splice(i, 1);

            return {
                json: desc,
                buffers,
                bufferViews,
                images,
                textures,
                materials,
                meshes,
                nodes,
                animations,
                scenes,
                scene,
            };
        }

        static async parseDesc(src) {
            if (!src.match(/\.glb$/)) {
                return await fetch(src).then((res) => res.json());
            } else {
                return await fetch(src)
                    .then((res) => res.arrayBuffer())
                    .then((glb) => this.unpackGLB(glb));
            }
        }

        // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32
        static unpackGLB(glb) {
            // Decode and verify GLB header.
            const header = new Uint32Array(glb, 0, 3);
            if (header[0] !== 0x46546c67) {
                throw new Error('Invalid glTF asset.');
            } else if (header[1] !== 2) {
                throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
            }
            // Decode and verify chunk headers.
            const jsonChunkHeader = new Uint32Array(glb, 12, 2);
            const jsonByteOffset = 20;
            const jsonByteLength = jsonChunkHeader[0];
            if (jsonChunkHeader[1] !== 0x4e4f534a) {
                throw new Error('Unexpected GLB layout.');
            }

            // Decode JSON.
            const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
            const json = JSON.parse(jsonText);
            // JSON only
            if (jsonByteOffset + jsonByteLength === glb.byteLength) return json;

            const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
            if (binaryChunkHeader[1] !== 0x004e4942) {
                throw new Error('Unexpected GLB layout.');
            }
            // Decode content.
            const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
            const binaryByteLength = binaryChunkHeader[0];
            const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
            // Attach binary to buffer
            json.buffers[0].binary = binary;
            return json;
        }

        // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085
        static resolveURI(uri, dir) {
            // Invalid URI
            if (typeof uri !== 'string' || uri === '') return '';

            // Host Relative URI
            if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
                dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
            }

            // Absolute URI http://, https://, //
            if (/^(https?:)?\/\//i.test(uri)) return uri;

            // Data URI
            if (/^data:.*,.*$/i.test(uri)) return uri;

            // Blob URI
            if (/^blob:.*$/i.test(uri)) return uri;

            // Relative URI
            return dir + uri;
        }

        static async loadBuffers(desc, dir) {
            if (!desc.buffers) return null;
            return await Promise.all(
                desc.buffers.map((buffer) => {
                    // For GLB, binary buffer ready to go
                    if (buffer.binary) return buffer.binary;
                    const uri = this.resolveURI(buffer.uri, dir);
                    return fetch(uri).then((res) => res.arrayBuffer());
                })
            );
        }

        static parseBufferViews(gl, desc, buffers) {
            if (!desc.bufferViews) return null;
            // Clone to leave description pure
            const bufferViews = desc.bufferViews.map((o) => Object.assign({}, o));

            desc.meshes &&
                desc.meshes.forEach(({ primitives }) => {
                    primitives.forEach(({ attributes, indices }) => {
                        // Flag bufferView as an attribute, so it knows to create a gl buffer
                        for (let attr in attributes) bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;

                        if (indices === undefined) return;
                        bufferViews[desc.accessors[indices].bufferView].isAttribute = true;

                        // Make sure indices bufferView have a target property for gl buffer binding
                        bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
                    });
                });

            // Get componentType of each bufferView from the accessors
            desc.accessors.forEach(({ bufferView: i, componentType }) => {
                bufferViews[i].componentType = componentType;
            });

            // Get mimetype of bufferView from images
            desc.images &&
                desc.images.forEach(({ uri, bufferView: i, mimeType }) => {
                    if (i === undefined) return;
                    bufferViews[i].mimeType = mimeType;
                });

            // Push each bufferView to the GPU as a separate buffer
            bufferViews.forEach(
                (
                    {
                        buffer: bufferIndex, // required
                        byteOffset = 0, // optional
                        byteLength, // required
                        byteStride, // optional
                        target = gl.ARRAY_BUFFER, // optional, added above for elements
                        name, // optional
                        extensions, // optional
                        extras, // optional

                        componentType, // optional, added from accessor above
                        mimeType, // optional, added from images above
                        isAttribute,
                    },
                    i
                ) => {
                    const TypeArray = TYPE_ARRAY[componentType || mimeType];
                    const elementBytes = TypeArray.BYTES_PER_ELEMENT;

                    const data = new TypeArray(buffers[bufferIndex], byteOffset, byteLength / elementBytes);
                    bufferViews[i].data = data;
                    bufferViews[i].originalBuffer = buffers[bufferIndex];

                    if (!isAttribute) return;
                    // Create gl buffers for the bufferView, pushing it to the GPU
                    const buffer = gl.createBuffer();
                    gl.bindBuffer(target, buffer);
                    gl.renderer.state.boundBuffer = buffer;
                    gl.bufferData(target, data, gl.STATIC_DRAW);
                    bufferViews[i].buffer = buffer;
                }
            );

            return bufferViews;
        }

        static parseImages(gl, desc, dir, bufferViews) {
            if (!desc.images) return null;
            return desc.images.map(({ uri, bufferView: bufferViewIndex, mimeType, name }) => {
                const image = new Image();
                image.name = name;
                if (uri) {
                    image.src = this.resolveURI(uri, dir);
                } else if (bufferViewIndex !== undefined) {
                    const { data } = bufferViews[bufferViewIndex];
                    const blob = new Blob([data], { type: mimeType });
                    image.src = URL.createObjectURL(blob);
                }
                image.ready = new Promise((res) => {
                    image.onload = () => res();
                });
                return image;
            });
        }

        static parseTextures(gl, desc, images) {
            if (!desc.textures) return null;
            return desc.textures.map(({ sampler: samplerIndex, source: sourceIndex, name, extensions, extras }) => {
                const options = {
                    flipY: false,
                    wrapS: gl.REPEAT, // Repeat by default, opposed to OGL's clamp by default
                    wrapT: gl.REPEAT,
                };
                const sampler = samplerIndex !== undefined ? desc.samplers[samplerIndex] : null;
                if (sampler) {
                    ['magFilter', 'minFilter', 'wrapS', 'wrapT'].forEach((prop) => {
                        if (sampler[prop]) options[prop] = sampler[prop];
                    });
                }
                const texture = new Texture(gl, options);
                texture.name = name;
                const image = images[sourceIndex];
                image.ready.then(() => (texture.image = image));

                return texture;
            });
        }

        static parseMaterials(gl, desc, textures) {
            if (!desc.materials) return null;
            return desc.materials.map(
                ({
                    name,
                    extensions,
                    extras,
                    pbrMetallicRoughness = {},
                    normalTexture,
                    occlusionTexture,
                    emissiveTexture,
                    emissiveFactor = [0, 0, 0],
                    alphaMode = 'OPAQUE',
                    alphaCutoff = 0.5,
                    doubleSided = false,
                }) => {
                    const {
                        baseColorFactor = [1, 1, 1, 1],
                        baseColorTexture,
                        metallicFactor = 1,
                        roughnessFactor = 1,
                        metallicRoughnessTexture,
                        //   extensions,
                        //   extras,
                    } = pbrMetallicRoughness;

                    if (baseColorTexture) {
                        baseColorTexture.texture = textures[baseColorTexture.index];
                        // texCoord
                    }
                    if (normalTexture) {
                        normalTexture.texture = textures[normalTexture.index];
                        // scale: 1
                        // texCoord
                    }
                    if (metallicRoughnessTexture) {
                        metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
                        // texCoord
                    }
                    if (occlusionTexture) {
                        occlusionTexture.texture = textures[occlusionTexture.index];
                        // strength 1
                        // texCoord
                    }
                    if (emissiveTexture) {
                        emissiveTexture.texture = textures[emissiveTexture.index];
                        // texCoord
                    }

                    return {
                        name,
                        baseColorFactor,
                        baseColorTexture,
                        metallicFactor,
                        roughnessFactor,
                        metallicRoughnessTexture,
                        normalTexture,
                        occlusionTexture,
                        emissiveTexture,
                        emissiveFactor,
                        alphaMode,
                        alphaCutoff,
                        doubleSided,
                    };
                }
            );
        }

        static parseSkins(gl, desc, bufferViews) {
            if (!desc.skins) return null;
            return desc.skins.map(
                ({
                    inverseBindMatrices, // optional
                    skeleton, // optional
                    joints, // required
                    // name,
                    // extensions,
                    // extras,
                }) => {
                    return {
                        inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
                        skeleton,
                        joints,
                    };
                }
            );
        }

        static parseMeshes(gl, desc, bufferViews, materials, skins) {
            if (!desc.meshes) return null;
            return desc.meshes.map(
                (
                    {
                        primitives, // required
                        weights, // optional
                        name, // optional
                        extensions, // optional
                        extras, // optional
                    },
                    meshIndex
                ) => {
                    // TODO: weights stuff ?
                    // Parse through nodes to see how many instances there are
                    // and if there is a skin attached
                    let numInstances = 0;
                    let skinIndex = false;
                    desc.nodes &&
                        desc.nodes.forEach(({ mesh, skin }) => {
                            if (mesh === meshIndex) {
                                numInstances++;
                                if (skin !== undefined) skinIndex = skin;
                            }
                        });

                    primitives = this.parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances).map(({ geometry, program, mode }) => {
                        // Create either skinned mesh or regular mesh
                        const mesh =
                            typeof skinIndex === 'number'
                                ? new GLTFSkin(gl, { skeleton: skins[skinIndex], geometry, program, mode })
                                : new Mesh(gl, { geometry, program, mode });
                        mesh.name = name;
                        if (mesh.geometry.isInstanced) {
                            // Tag mesh so that nodes can add their transforms to the instance attribute
                            mesh.numInstances = numInstances;
                            // Avoid incorrect culling for instances
                            mesh.frustumCulled = false;
                        }
                        return mesh;
                    });

                    return {
                        primitives,
                        weights,
                        name,
                    };
                }
            );
        }

        static parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances) {
            return primitives.map(
                ({
                    attributes, // required
                    indices, // optional
                    material: materialIndex, // optional
                    mode = 4, // optional
                    targets, // optional
                    extensions, // optional
                    extras, // optional
                }) => {
                    const geometry = new Geometry(gl);

                    // Add each attribute found in primitive
                    for (let attr in attributes) {
                        geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
                    }

                    // Add index attribute if found
                    if (indices !== undefined) {
                        geometry.addAttribute('index', this.parseAccessor(indices, desc, bufferViews));
                    }

                    // Add instanced transform attribute if multiple instances
                    if (numInstances > 1) {
                        geometry.addAttribute('instanceMatrix', {
                            instanced: 1,
                            size: 16,
                            data: new Float32Array(numInstances * 16),
                        });
                    }

                    // TODO: materials
                    const program = new NormalProgram(gl);
                    if (materialIndex !== undefined) {
                        program.gltfMaterial = materials[materialIndex];
                    }

                    return {
                        geometry,
                        program,
                        mode,
                    };
                }
            );
        }

        static parseAccessor(index, desc, bufferViews) {
            // TODO: init missing bufferView with 0s
            // TODO: support sparse

            const {
                bufferView: bufferViewIndex, // optional
                byteOffset = 0, // optional
                componentType, // required
                normalized = false, // optional
                count, // required
                type, // required
                min, // optional
                max, // optional
                sparse, // optional
                // name, // optional
                // extensions, // optional
                // extras, // optional
            } = desc.accessors[index];

            const {
                data, // attached in parseBufferViews
                originalBuffer, // attached in parseBufferViews
                buffer, // replaced to be the actual GL buffer
                byteOffset: bufferByteOffset = 0,
                // byteLength, // applied in parseBufferViews
                byteStride = 0,
                target,
                // name,
                // extensions,
                // extras,
            } = bufferViews[bufferViewIndex];

            const size = TYPE_SIZE[type];

            // Parse data from joined buffers
            const TypeArray = TYPE_ARRAY[componentType];
            const elementBytes = data.BYTES_PER_ELEMENT;
            const componentStride = byteStride / elementBytes;
            const isInterleaved = !!byteStride && componentStride !== size;

            // TODO: interleaved
            const newData = isInterleaved ? data : new TypeArray(originalBuffer, byteOffset + bufferByteOffset, count * size);

            // Return attribute data
            return {
                data: newData,
                size,
                type: componentType,
                normalized,
                buffer,
                stride: byteStride,
                offset: byteOffset,
                count,
                min,
                max,
            };
        }

        static parseNodes(gl, desc, meshes, skins) {
            if (!desc.nodes) return null;
            const nodes = desc.nodes.map(
                ({
                    camera, // optional
                    children, // optional
                    skin: skinIndex, // optional
                    matrix, // optional
                    mesh: meshIndex, // optional
                    rotation, // optional
                    scale, // optional
                    translation, // optional
                    weights, // optional
                    name, // optional
                    extensions, // optional
                    extras, // optional
                }) => {
                    const node = new Transform();
                    if (name) node.name = name;

                    // Apply transformations
                    if (matrix) {
                        node.matrix.copy(matrix);
                        node.decompose();
                    } else {
                        if (rotation) node.quaternion.copy(rotation);
                        if (scale) node.scale.copy(scale);
                        if (translation) node.position.copy(translation);
                        node.updateMatrix();
                    }

                    // Flags for avoiding duplicate transforms and removing unused instance nodes
                    let isInstanced = false;
                    let isFirstInstance = true;

                    // add mesh if included
                    if (meshIndex !== undefined) {
                        meshes[meshIndex].primitives.forEach((mesh) => {
                            if (mesh.geometry.isInstanced) {
                                isInstanced = true;
                                if (!mesh.instanceCount) {
                                    mesh.instanceCount = 0;
                                } else {
                                    isFirstInstance = false;
                                }
                                node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);
                                mesh.instanceCount++;

                                if (mesh.instanceCount === mesh.numInstances) {
                                    // Remove properties once all instances added
                                    delete mesh.numInstances;
                                    delete mesh.instanceCount;
                                    // Flag attribute as dirty
                                    mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
                                }
                            }

                            // For instances, only the first node will actually have the mesh
                            if (isInstanced) {
                                if (isFirstInstance) mesh.setParent(node);
                            } else {
                                mesh.setParent(node);
                            }
                        });
                    }

                    // Reset node if instanced to not duplicate transforms
                    if (isInstanced) {
                        // Remove unused nodes just providing an instance transform
                        if (!isFirstInstance) return null;
                        // Avoid duplicate transform for node containing the instanced mesh
                        node.matrix.identity();
                        node.decompose();
                    }

                    return node;
                }
            );

            desc.nodes.forEach(({ children = [] }, i) => {
                // Set hierarchy now all nodes created
                children.forEach((childIndex) => {
                    if (!nodes[childIndex]) return;
                    nodes[childIndex].setParent(nodes[i]);
                });
            });

            return nodes;
        }

        static populateSkins(skins, nodes) {
            if (!skins) return;
            skins.forEach((skin) => {
                skin.joints = skin.joints.map((i, index) => {
                    const joint = nodes[i];
                    joint.bindInverse = new Mat4(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
                    return joint;
                });
                if (skin.skeleton) skin.skeleton = nodes[skin.skeleton];
            });
        }

        static parseAnimations(gl, desc, nodes, bufferViews) {
            if (!desc.animations) return null;
            return desc.animations.map(
                ({
                    channels, // required
                    samplers, // required
                    name, // optional
                    // extensions, // optional
                    // extras,  // optional
                }) => {
                    const data = channels.map(
                        ({
                            sampler: samplerIndex, // required
                            target, // required
                            // extensions, // optional
                            // extras, // optional
                        }) => {
                            const {
                                input: inputIndex, // required
                                interpolation = 'LINEAR',
                                output: outputIndex, // required
                                // extensions, // optional
                                // extras, // optional
                            } = samplers[samplerIndex];

                            const {
                                node: nodeIndex, // optional - TODO: when is it not included?
                                path, // required
                                // extensions, // optional
                                // extras, // optional
                            } = target;

                            const node = nodes[nodeIndex];
                            const transform = TRANSFORMS[path];
                            const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
                            const values = this.parseAccessor(outputIndex, desc, bufferViews).data;

                            return {
                                node,
                                transform,
                                interpolation,
                                times,
                                values,
                            };
                        }
                    );

                    return {
                        name,
                        animation: new GLTFAnimation(data),
                    };
                }
            );
        }

        static parseScenes(desc, nodes) {
            if (!desc.scenes) return null;
            return desc.scenes.map(
                ({
                    nodes: nodesIndices = [],
                    name, // optional
                    extensions,
                    extras,
                }) => {
                    return nodesIndices.reduce((map, i) => {
                        // Don't add null nodes (instanced transforms)
                        if (nodes[i]) map.push(nodes[i]);
                        return map;
                    }, []);
                }
            );
        }
    }

    exports.Animation = Animation;
    exports.Box = Box;
    exports.Camera = Camera;
    exports.Color = Color;
    exports.Curve = Curve;
    exports.Cylinder = Cylinder;
    exports.Euler = Euler;
    exports.Flowmap = Flowmap;
    exports.GLTFLoader = GLTFLoader;
    exports.GLTFSkin = GLTFSkin;
    exports.GPGPU = GPGPU;
    exports.Geometry = Geometry;
    exports.KTXTexture = KTXTexture;
    exports.Mat3 = Mat3;
    exports.Mat4 = Mat4;
    exports.Mesh = Mesh;
    exports.NormalProgram = NormalProgram;
    exports.Orbit = Orbit;
    exports.Plane = Plane;
    exports.Polyline = Polyline;
    exports.Post = Post;
    exports.Program = Program;
    exports.Quat = Quat;
    exports.Raycast = Raycast;
    exports.RenderTarget = RenderTarget;
    exports.Renderer = Renderer;
    exports.Shadow = Shadow;
    exports.Skin = Skin;
    exports.Sphere = Sphere;
    exports.Text = Text;
    exports.Texture = Texture;
    exports.TextureLoader = TextureLoader;
    exports.Torus = Torus;
    exports.Transform = Transform;
    exports.Triangle = Triangle;
    exports.Vec2 = Vec2;
    exports.Vec3 = Vec3;
    exports.Vec4 = Vec4;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
