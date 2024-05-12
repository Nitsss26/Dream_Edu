'use client'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const items = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const Feature2 = ({ content, mainHeading }) => {
    return (
        <section className="app__feature py-6 md:py-14">
            <div className="app__container lg:px-10 xl:px-0">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="primary-heading text-center" dangerouslySetInnerHTML={{ __html: mainHeading }} />
                </div>
                <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div variants={items}>
                        <div className="single-feature-two orange-shape">
                            <div className="h2-feature-icon shadow-lg mb-40 mb-sm-25 bg-[#ff6a00]">
                                <svg height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m96 48c-26.472656 0-48 21.527344-48 48s21.527344 48 48 48 48-21.527344 48-48-21.527344-48-48-48zm0 80c-17.648438 0-32-14.351562-32-32s14.351562-32 32-32 32 14.351562 32 32-14.351562 32-32 32zm0 0" /><path d="m472 256c-10.414062 0-19.214844 6.710938-22.527344 16h-17.472656v-64h-16v64h-16v-32h-16v32h-16v-48h-16v48h-4.855469l-75.015625-69.664062c5.03125-7.664063 7.871094-16.777344 7.871094-26.335938 0-13.113281-5.296875-25-13.847656-33.671875l49.382812-54.328125h20.863282c4.027343 40.367188 38.1875 72 79.59375 72 44.113281 0 80-35.886719 80-80s-35.878907-80-79.992188-80c-41.414062 0-75.566406 31.632812-79.59375 72h-27.941406l-55.394532 60.9375c-6.375-3.128906-13.511718-4.9375-21.070312-4.9375-.238281 0-.472656.03125-.703125.03125l-8.871094-40.03125h-30.425781v-13.769531l-21.449219-7.152344c-.4375-1.117187-.902343-2.230469-1.390625-3.34375l10.121094-20.230469-30.785156-30.785156-20.230469 10.121094c-1.113281-.496094-2.226563-.960938-3.34375-1.390625l-7.152344-21.449219h-43.53125l-7.148437 21.449219c-1.121094.4375-2.234375.902343-3.347656 1.390625l-20.230469-10.113282-30.785157 30.785157 10.121094 20.230469c-.496094 1.113281-.960937 2.226562-1.390625 3.347656l-21.457031 7.140625v43.53125l21.449219 7.148437c.4375 1.121094.902343 2.234375 1.390625 3.347656l-10.121094 20.230469 30.785156 30.785157 20.230469-10.121094c1.113281.496094 2.226563.960937 3.335937 1.398437l7.160157 21.449219h43.53125l7.148437-21.449219c1.113282-.4375 2.226563-.902343 3.335938-1.398437l20.234375 10.121094 30.785156-30.785157-10.121094-20.230469c.496094-1.113281.960938-2.226562 1.390625-3.347656l21.464844-7.140625v-13.769531h17.574219l5.976562 26.960938c-18.375 6.734374-31.550781 24.351562-31.550781 45.039062 0 13.207031 5.464844 25.40625 14.542969 34.273438l-42.734375 61.726562h-11.808594v-48h-16v48h-16v-64h-16v64h-16v-32h-16v32h-17.472656c-3.3125-9.289062-12.113282-16-22.527344-16-13.230469 0-24 10.769531-24 24s10.769531 24 24 24c10.414062 0 19.214844-6.710938 22.527344-16h117.664062l43.808594-63.28125v163.90625c-1.511719-1.554688-2.585938-3.546875-2.992188-5.800781l-14.335937-78.824219h-21.230469c-14.027344 0-25.441406 11.414062-25.441406 25.441406v5.109375c0 1.410157.121094 2.816407.34375 4.183594l14.390625 86.355469c1.121094 6.71875 3.96875 13.09375 8.226563 18.40625l19.78125 24.726562c3.394531 4.25 5.257812 9.578125 5.257812 15v12.777344h128v-12.777344c0-5.429687 1.863281-10.75 5.257812-15l17.972657-22.46875c5.65625-7.058594 8.769531-15.929687 8.769531-24.976562v-84.777344c0-13.230469-10.769531-24-24-24-3.160156 0-6.160156.648438-8.929688 1.761719-2.757812-10.203125-12.007812-17.761719-23.070312-17.761719-2.816406 0-5.488281.574219-8 1.472656v-1.472656c0-13.230469-10.769531-24-24-24-2.816406 0-5.488281.574219-8 1.472656v-56c1.816406-1.046875 3.519531-2.214844 5.160156-3.480468l79.695313 74.007812h108.617187c3.3125 9.289062 12.113282 16 22.527344 16 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24zm-120-176c0-8.792969 1.785156-17.183594 5.007812-24.816406l14.046876 8.113281c-1.941407 5.207031-3.054688 10.824219-3.054688 16.703125s1.113281 11.496094 3.054688 16.703125l-14.046876 8.113281c-3.222656-7.632812-5.007812-16.023437-5.007812-24.816406zm64-32c17.648438 0 32 14.351562 32 32s-14.351562 32-32 32-32-14.351562-32-32 14.351562-32 32-32zm64 32c0 8.792969-1.785156 17.183594-5.007812 24.816406l-14.046876-8.113281c1.941407-5.207031 3.054688-10.824219 3.054688-16.703125s-1.113281-11.496094-3.054688-16.703125l14.046876-8.113281c3.222656 7.632812 5.007812 16.023437 5.007812 24.816406zm-114.902344 38.632812 13.933594-8.046874c7.191406 8.679687 17.394531 14.742187 28.96875 16.695312v16.167969c-17.472656-2.203125-32.734375-11.449219-42.902344-24.816407zm58.902344 24.816407v-16.167969c11.574219-1.953125 21.777344-8.015625 28.96875-16.695312l13.933594 8.046874c-10.167969 13.367188-25.429688 22.613282-42.902344 24.816407zm42.902344-102.082031-13.933594 8.046874c-7.191406-8.671874-17.394531-14.734374-28.96875-16.695312v-16.167969c17.472656 2.203125 32.734375 11.449219 42.902344 24.816407zm-58.902344-24.816407v16.167969c-11.574219 1.953125-21.777344 8.015625-28.96875 16.695312l-13.933594-8.046874c10.167969-13.367188 25.429688-22.613282 42.902344-24.816407zm-232 89.679688-18 6-1.257812 3.816406c-.949219 2.890625-2.167969 5.816406-3.628907 8.695313l-1.816406 3.59375 8.496094 17-14.472657 14.472656-16.992187-8.496094-3.585937 1.808594c-2.910157 1.464844-5.839844 2.6875-8.703126 3.632812l-3.816406 1.253906-5.992187 17.992188h-20.46875l-6-18-3.816407-1.257812c-2.867187-.941407-5.800781-2.167969-8.707031-3.628907l-3.582031-1.808593-16.992188 8.496093-14.472656-14.472656 8.496094-17-1.808594-3.585937c-1.453125-2.886719-2.671875-5.8125-3.632812-8.695313l-1.246094-3.816406-18-6v-20.46875l18-6 1.257812-3.816407c.949219-2.890624 2.167969-5.816406 3.628907-8.699218l1.816406-3.589844-8.511719-16.992188 14.472656-14.472656 17 8.496094 3.59375-1.808594c2.886719-1.453125 5.8125-2.671875 8.695313-3.632812l3.816406-1.253906 6-17.992188h20.46875l6 18 3.816407 1.257812c2.890624.949219 5.816406 2.167969 8.699218 3.628907l3.589844 1.816406 17-8.496094 14.472656 14.472657-8.496094 17 1.816407 3.59375c1.457031 2.886718 2.671875 5.816406 3.632812 8.695312l1.253907 3.816406 18 6v20.445313zm-152 181.769531c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm208-144c17.648438 0 32 14.351562 32 32 0 8.078125-3.054688 15.65625-8.257812 21.425781-1.300782-12.011719-11.390626-21.425781-23.742188-21.425781-12.367188 0-22.457031 9.433594-23.742188 21.457031-5.210937-5.761719-8.257812-13.34375-8.257812-21.457031 0-17.648438 14.351562-32 32-32zm32 144c4.40625 0 8 3.59375 8 8v96h16v-72c0-4.40625 3.59375-8 8-8s8 3.59375 8 8v72h16v-56c0-4.40625 3.59375-8 8-8s8 3.59375 8 8v84.777344c0 5.429687-1.863281 10.75-5.257812 15l-17.972657 22.46875c-4.984375 6.226562-7.992187 13.851562-8.632812 21.761718h-96.273438c-.648437-7.910156-3.65625-15.535156-8.632812-21.761718l-19.78125-24.726563c-2.554688-3.191406-4.265625-7.007812-4.9375-11.046875l-14.390625-86.367187c-.082032-.519531-.121094-1.035157-.121094-1.554688v-5.109375c0-5.210937 4.230469-9.441406 9.441406-9.441406h7.878906l11.945313 65.6875c2.359375 12.929688 13.597656 22.3125 26.734375 22.3125h8v-208c0-4.40625 3.59375-8 8-8s8 3.59375 8 8v192h16v-96c0-4.40625 3.59375-8 8-8zm208 0c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" /></svg>
                            </div>
                            <div className="card-two-content">
                                <div>
                                    <div className="card-title">
                                        <h3 className="text-2xl text-center font-bold py-7">{content[0].heading}</h3>
                                    </div>
                                    <p className="pb-6 app__text font-bold">{content[0].description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={items}>
                        <div className="single-feature-two gray-shape">
                            <div className="h2-feature-icon d-center bg-[#056C93] shadow-lg mb-40 mb-sm-25 animate get-bottom">
                                <svg height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m128 0v32h-128v192h112v-16h-88.632812l28.839843-41.199219c9.984375-14.28125 26.359375-22.800781 43.792969-22.800781s33.808594 8.519531 43.800781 22.800781l28.832031 41.199219h-40.632812v288h368v-496zm-88.902344 157.632812-23.097656 32.992188v-142.625h272v115.574219l-10.046875-32.148438c-9.609375-30.761719-37.722656-51.425781-69.953125-51.425781s-60.34375 20.664062-69.953125 51.433594l-2.742187 8.773437c-11.425782-7.839843-25.089844-12.207031-39.304688-12.207031-22.648438 0-43.921875 11.070312-56.902344 29.632812zm113.804688 0c-1.390625-1.992187-2.925782-3.855468-4.503906-5.671874l4.921874-15.753907c7.511719-24.046875 29.488282-40.207031 54.679688-40.207031s47.167969 16.160156 54.679688 40.199219l22.441406 71.800781h-96.953125zm327.097656 322.367188h-336v-256h160v-192h-160v-16h336zm0 0" /><path d="m160 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m224 464h48v-160h-48zm16-144h16v128h-16zm0 0" /><path d="m288 464h48v-128h-48zm16-112h16v96h-16zm0 0" /><path d="m352 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m416 464h48v-112h-48zm16-96h16v80h-16zm0 0" /><path d="m271.703125 266.902344c.121094-.957032.296875-1.910156.296875-2.902344 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 3.695312.902344 7.152344 2.40625 10.28125l-32.117188 32.117188c-3.136718-1.496094-6.59375-2.398438-10.289062-2.398438-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24c0-3.695312-.902344-7.152344-2.40625-10.28125l32.117188-32.117188c3.136718 1.496094 6.59375 2.398438 10.289062 2.398438 6.457031 0 12.296875-2.59375 16.617188-6.753906l23.679687 11.84375c-.121094.964844-.296875 1.910156-.296875 2.910156 0 13.230469 10.769531 24 24 24 6.457031 0 12.296875-2.59375 16.609375-6.742188l23.679687 11.839844c-.113281.957032-.289062 1.910156-.289062 2.902344 0 13.230469 10.769531 24 24 24 12.449219 0 22.585938-9.550781 23.769531-21.695312l20.246094-5.066407c4.296875 6.472657 11.648437 10.761719 19.984375 10.761719 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24c-12.449219 0-22.59375 9.558594-23.769531 21.703125l-20.238281 5.066406c-4.304688-6.480469-11.648438-10.769531-19.992188-10.769531-6.457031 0-12.296875 2.59375-16.617188 6.753906l-23.679687-11.84375c.121094-.964844.296875-1.910156.296875-2.910156 0-13.230469-10.769531-24-24-24-6.457031 0-12.296875 2.59375-16.609375 6.742188zm-87.703125 69.097656c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm64-64c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm192 32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64 16c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64-32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm0 0" /><path d="m392 272c39.695312 0 72-32.304688 72-72s-32.304688-72-72-72-72 32.304688-72 72 32.304688 72 72 72zm0-128c30.878906 0 56 25.121094 56 56s-25.121094 56-56 56-56-25.121094-56-56 25.121094-56 56-56zm0 0" /><path d="m320 32h144v16h-144zm0 0" /><path d="m320 64h144v16h-144zm0 0" /><path d="m448 96h16v16h-16zm0 0" /><path d="m320 96h112v16h-112zm0 0" /><path d="m56 64c-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24-10.769531-24-24-24zm0 32c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" /></svg>
                            </div>
                            <div className="card-two-content">
                                <div>
                                    <div className="card-title">
                                        <h3 className="text-2xl text-center font-bold py-7">{content[1].heading}</h3>
                                    </div>
                                    <p className="pb-6 app__text font-bold">{content[1].description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={items}>
                        <div className="single-feature-two orange-shape">
                            <div className="h2-feature-icon d-center shadow-lg bg-[#ff6a00] mb-40 mb-sm-25 animate get-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" height="512pt" version="1.1" viewBox="-7 0 511 512" width="512pt">
                                    <g id="surface1">
                                        <path d="M 355.851562 266.285156 C 355.851562 262.144531 352.492188 258.785156 348.351562 258.785156 L 150.582031 258.785156 C 146.441406 258.785156 143.082031 262.144531 143.082031 266.285156 C 143.082031 270.429688 146.441406 273.785156 150.582031 273.785156 L 348.351562 273.785156 C 352.492188 273.785156 355.851562 270.429688 355.851562 266.285156 Z M 355.851562 266.285156 " style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: 1 }} />
                                        <path d="M 146.050781 92.90625 L 168.726562 182.472656 C 168.738281 182.519531 168.761719 182.5625 168.773438 182.609375 L 173.566406 201.53125 C 172.527344 202.292969 171.535156 203.140625 170.597656 204.078125 C 165.617188 209.042969 162.863281 215.648438 162.851562 222.683594 C 162.839844 229.714844 165.566406 236.332031 170.53125 241.316406 C 175.671875 246.46875 182.429688 249.046875 189.1875 249.046875 C 195.914062 249.046875 202.640625 246.492188 207.773438 241.382812 C 213.113281 236.058594 215.679688 228.996094 215.488281 221.996094 L 284.136719 222.117188 C 283.925781 229.109375 286.46875 236.175781 291.785156 241.507812 C 296.75 246.492188 303.359375 249.242188 310.390625 249.253906 C 310.40625 249.253906 310.421875 249.253906 310.4375 249.253906 C 317.453125 249.253906 324.054688 246.527344 329.023438 241.574219 C 334.007812 236.609375 336.757812 230 336.769531 222.96875 C 336.78125 215.933594 334.054688 209.316406 329.089844 204.335938 C 318.839844 194.050781 302.136719 194.019531 291.847656 204.269531 C 290.941406 205.171875 290.117188 206.128906 289.371094 207.125 L 210.289062 206.984375 C 209.550781 205.996094 208.734375 205.042969 207.835938 204.140625 C 202.339844 198.621094 194.980469 196.0625 187.753906 196.453125 L 185.648438 188.148438 L 318.050781 188.367188 C 318.058594 188.367188 318.066406 188.367188 318.074219 188.367188 C 324.277344 188.367188 329.6875 184.175781 331.230469 178.164062 L 351.097656 100.84375 C 352.148438 96.75 351.265625 92.488281 348.679688 89.148438 C 346.09375 85.804688 342.1875 83.886719 337.960938 83.878906 L 159.171875 83.574219 L 156.386719 72.582031 C 155.265625 68.148438 152.058594 64.5 147.816406 62.816406 L 116.222656 50.28125 C 112.371094 48.757812 108.011719 50.636719 106.484375 54.488281 C 104.957031 58.339844 106.839844 62.695312 110.6875 64.226562 L 141.9375 76.621094 L 146.007812 92.695312 C 146.027344 92.769531 146.03125 92.839844 146.050781 92.90625 Z M 302.4375 214.894531 C 304.644531 212.695312 307.542969 211.597656 310.4375 211.597656 C 313.347656 211.597656 316.257812 212.707031 318.464844 214.925781 C 320.601562 217.070312 321.777344 219.914062 321.769531 222.945312 C 321.765625 225.96875 320.582031 228.8125 318.4375 230.949219 C 316.296875 233.082031 313.460938 234.257812 310.4375 234.257812 C 310.433594 234.257812 310.425781 234.257812 310.417969 234.257812 C 307.390625 234.25 304.546875 233.066406 302.410156 230.925781 C 300.273438 228.777344 299.101562 225.933594 299.105469 222.902344 C 299.113281 219.875 300.292969 217.03125 302.4375 214.894531 Z M 197.210938 214.730469 C 201.621094 219.15625 201.609375 226.347656 197.183594 230.757812 C 192.757812 235.167969 185.570312 235.152344 181.15625 230.730469 C 179.019531 228.585938 177.847656 225.738281 177.851562 222.710938 C 177.859375 219.683594 179.042969 216.839844 181.1875 214.703125 C 185.613281 210.292969 192.800781 210.304688 197.210938 214.730469 Z M 336.117188 98.875 L 316.976562 173.367188 L 181.851562 173.140625 L 162.972656 98.582031 Z M 336.117188 98.875 " style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: 1 }} />
                                        <path d="M 285.640625 160.914062 C 286.304688 161.097656 286.972656 161.183594 287.632812 161.183594 C 290.921875 161.183594 293.945312 159 294.859375 155.671875 L 304.128906 121.9375 C 305.226562 117.941406 302.878906 113.8125 298.886719 112.71875 C 294.890625 111.613281 290.761719 113.964844 289.664062 117.960938 L 280.394531 151.695312 C 279.296875 155.6875 281.644531 159.816406 285.640625 160.914062 Z M 285.640625 160.914062 " style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: 1 }} />
                                        <path d="M 202.488281 155.671875 C 203.40625 159 206.425781 161.183594 209.71875 161.183594 C 210.375 161.183594 211.046875 161.097656 211.710938 160.914062 C 215.703125 159.816406 218.050781 155.6875 216.953125 151.695312 L 207.683594 117.960938 C 206.585938 113.96875 202.457031 111.613281 198.464844 112.71875 C 194.472656 113.8125 192.121094 117.941406 193.21875 121.9375 Z M 202.488281 155.671875 " style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: 1 }} />
                                        <path d="M 248.675781 161.183594 C 252.816406 161.183594 256.175781 157.824219 256.175781 153.683594 L 256.175781 119.949219 C 256.175781 115.804688 252.816406 112.449219 248.675781 112.449219 C 244.53125 112.449219 241.175781 115.804688 241.175781 119.949219 L 241.175781 153.683594 C 241.175781 157.824219 244.53125 161.183594 248.675781 161.183594 Z M 248.675781 161.183594 " style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: 1 }} />
                                        <path d="M 498.394531 214.503906 C 498.328125 213.203125 498.171875 211.84375 497.921875 210.441406 C 497.921875 210.4375 497.921875 210.429688 497.917969 210.421875 C 497.777344 209.628906 497.601562 208.847656 497.414062 208.066406 C 497.371094 207.890625 497.324219 207.714844 497.28125 207.539062 C 497.074219 206.742188 496.847656 205.953125 496.589844 205.175781 C 496.320312 204.363281 496.015625 203.566406 495.695312 202.773438 C 495.65625 202.683594 495.621094 202.59375 495.585938 202.5 C 493.011719 196.332031 488.820312 190.820312 483.332031 186.53125 L 444.617188 156.28125 L 444.617188 26.058594 C 444.617188 11.6875 432.925781 0 418.558594 0 L 80.378906 0 C 66.007812 0 54.316406 11.6875 54.316406 26.058594 L 54.316406 156.164062 L 15.558594 186.550781 C 9.984375 190.921875 5.753906 196.558594 3.199219 202.867188 C 3.183594 202.910156 3.164062 202.953125 3.148438 202.996094 C 2.546875 204.503906 2.039062 206.054688 1.632812 207.632812 C 1.589844 207.796875 1.546875 207.960938 1.507812 208.128906 C 1.320312 208.886719 1.152344 209.648438 1.015625 210.417969 C 0.675781 212.347656 0.5 214.195312 0.5 215.917969 L 0.5 489.753906 C 0.5 495.648438 2.808594 501.011719 6.5625 504.996094 C 6.574219 505.003906 6.582031 505.015625 6.589844 505.027344 C 6.617188 505.054688 6.644531 505.078125 6.667969 505.105469 C 6.886719 505.335938 7.109375 505.558594 7.335938 505.773438 C 7.378906 505.816406 7.417969 505.855469 7.460938 505.894531 C 7.703125 506.125 7.953125 506.347656 8.203125 506.566406 C 8.226562 506.585938 8.246094 506.605469 8.265625 506.621094 C 12.160156 509.96875 17.21875 512 22.746094 512 L 476.1875 512 C 476.847656 512 477.5 511.964844 478.144531 511.910156 C 478.199219 511.902344 478.253906 511.902344 478.304688 511.898438 C 478.945312 511.835938 479.574219 511.746094 480.195312 511.632812 C 480.246094 511.621094 480.300781 511.613281 480.355469 511.601562 C 480.988281 511.484375 481.609375 511.335938 482.222656 511.160156 C 482.261719 511.152344 482.296875 511.140625 482.335938 511.128906 C 482.964844 510.945312 483.585938 510.738281 484.191406 510.503906 C 484.210938 510.496094 484.226562 510.488281 484.246094 510.484375 C 492.539062 507.246094 498.433594 499.179688 498.433594 489.753906 L 498.433594 215.917969 C 498.433594 215.457031 498.421875 214.984375 498.394531 214.503906 Z M 444.617188 175.316406 L 474.09375 198.351562 C 475.292969 199.289062 476.390625 200.316406 477.382812 201.417969 L 444.617188 227.027344 Z M 69.316406 26.058594 C 69.316406 19.960938 74.277344 15 80.378906 15 L 418.558594 15 C 424.65625 15 429.617188 19.960938 429.617188 26.058594 L 429.617188 238.746094 L 259.90625 371.371094 C 253.535156 376.347656 244.640625 376.339844 238.277344 371.351562 L 69.316406 238.878906 Z M 24.8125 198.355469 L 54.316406 175.222656 L 54.316406 227.117188 L 21.535156 201.417969 C 22.523438 200.316406 23.617188 199.292969 24.8125 198.355469 Z M 483.433594 488.507812 C 460.996094 469.433594 410.878906 426.863281 363.503906 386.925781 C 360.335938 384.257812 355.605469 384.660156 352.9375 387.828125 C 350.265625 390.992188 350.667969 395.726562 353.835938 398.394531 C 398.890625 436.375 446.4375 476.746094 470.265625 497 L 27.070312 497 C 52.257812 475.746094 98.515625 436.757812 142.445312 399.984375 C 145.621094 397.324219 146.042969 392.59375 143.382812 389.417969 C 140.726562 386.242188 135.996094 385.820312 132.820312 388.480469 C 87.730469 426.226562 40.207031 466.285156 15.5 487.136719 L 15.5 215.917969 C 15.5 215.867188 15.507812 215.804688 15.507812 215.753906 L 182.703125 346.867188 C 175.597656 352.769531 168.125 358.992188 160.429688 365.410156 C 157.246094 368.0625 156.820312 372.792969 159.472656 375.972656 C 160.957031 377.753906 163.089844 378.671875 165.234375 378.671875 C 166.929688 378.671875 168.632812 378.101562 170.035156 376.929688 C 178.632812 369.757812 186.941406 362.84375 194.78125 356.335938 L 229.027344 383.183594 C 234.933594 387.816406 242.019531 390.132812 249.105469 390.132812 C 256.171875 390.132812 263.242188 387.828125 269.144531 383.214844 L 303.652344 356.246094 C 310.863281 362.273438 318.472656 368.648438 326.332031 375.25 C 327.738281 376.433594 329.449219 377.007812 331.152344 377.007812 C 333.289062 377.007812 335.414062 376.097656 336.898438 374.332031 C 339.5625 371.160156 339.152344 366.429688 335.980469 363.765625 C 329.003906 357.90625 322.222656 352.222656 315.742188 346.804688 L 483.425781 215.738281 C 483.429688 215.796875 483.4375 215.863281 483.4375 215.921875 L 483.4375 488.507812 Z M 483.433594 488.507812 " style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: 1 }} />
                                    </g>
                                </svg>
                            </div>
                            <div className="card-two-content">
                                <div>
                                    <div className="card-title">
                                        <h3 className="text-2xl text-center font-bold py-7">{content[2].heading}</h3>
                                    </div>
                                    <p className="pb-6 app__text font-bold">{content[2].description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={items}>
                        <div className="single-feature-two gray-shape">
                            <div className="h2-feature-icon d-center bg-[#056C93] shadow-lg mb-40 mb-sm-25 animate get-bottom">
                                <svg height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m128 0v32h-128v192h112v-16h-88.632812l28.839843-41.199219c9.984375-14.28125 26.359375-22.800781 43.792969-22.800781s33.808594 8.519531 43.800781 22.800781l28.832031 41.199219h-40.632812v288h368v-496zm-88.902344 157.632812-23.097656 32.992188v-142.625h272v115.574219l-10.046875-32.148438c-9.609375-30.761719-37.722656-51.425781-69.953125-51.425781s-60.34375 20.664062-69.953125 51.433594l-2.742187 8.773437c-11.425782-7.839843-25.089844-12.207031-39.304688-12.207031-22.648438 0-43.921875 11.070312-56.902344 29.632812zm113.804688 0c-1.390625-1.992187-2.925782-3.855468-4.503906-5.671874l4.921874-15.753907c7.511719-24.046875 29.488282-40.207031 54.679688-40.207031s47.167969 16.160156 54.679688 40.199219l22.441406 71.800781h-96.953125zm327.097656 322.367188h-336v-256h160v-192h-160v-16h336zm0 0" /><path d="m160 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m224 464h48v-160h-48zm16-144h16v128h-16zm0 0" /><path d="m288 464h48v-128h-48zm16-112h16v96h-16zm0 0" /><path d="m352 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m416 464h48v-112h-48zm16-96h16v80h-16zm0 0" /><path d="m271.703125 266.902344c.121094-.957032.296875-1.910156.296875-2.902344 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 3.695312.902344 7.152344 2.40625 10.28125l-32.117188 32.117188c-3.136718-1.496094-6.59375-2.398438-10.289062-2.398438-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24c0-3.695312-.902344-7.152344-2.40625-10.28125l32.117188-32.117188c3.136718 1.496094 6.59375 2.398438 10.289062 2.398438 6.457031 0 12.296875-2.59375 16.617188-6.753906l23.679687 11.84375c-.121094.964844-.296875 1.910156-.296875 2.910156 0 13.230469 10.769531 24 24 24 6.457031 0 12.296875-2.59375 16.609375-6.742188l23.679687 11.839844c-.113281.957032-.289062 1.910156-.289062 2.902344 0 13.230469 10.769531 24 24 24 12.449219 0 22.585938-9.550781 23.769531-21.695312l20.246094-5.066407c4.296875 6.472657 11.648437 10.761719 19.984375 10.761719 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24c-12.449219 0-22.59375 9.558594-23.769531 21.703125l-20.238281 5.066406c-4.304688-6.480469-11.648438-10.769531-19.992188-10.769531-6.457031 0-12.296875 2.59375-16.617188 6.753906l-23.679687-11.84375c.121094-.964844.296875-1.910156.296875-2.910156 0-13.230469-10.769531-24-24-24-6.457031 0-12.296875 2.59375-16.609375 6.742188zm-87.703125 69.097656c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm64-64c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm192 32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64 16c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64-32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm0 0" /><path d="m392 272c39.695312 0 72-32.304688 72-72s-32.304688-72-72-72-72 32.304688-72 72 32.304688 72 72 72zm0-128c30.878906 0 56 25.121094 56 56s-25.121094 56-56 56-56-25.121094-56-56 25.121094-56 56-56zm0 0" /><path d="m320 32h144v16h-144zm0 0" /><path d="m320 64h144v16h-144zm0 0" /><path d="m448 96h16v16h-16zm0 0" /><path d="m320 96h112v16h-112zm0 0" /><path d="m56 64c-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24-10.769531-24-24-24zm0 32c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" /></svg>
                            </div>
                            <div className="card-two-content">
                                <div>
                                    <div className="card-title">
                                        <h3 className="text-2xl text-center font-bold py-7">{content[3].heading}</h3>
                                    </div>
                                    <p className="pb-6 app__text font-bold">{content[3].description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={items}>
                        <div className="single-feature-two orange-shape">
                            <div className="h2-feature-icon d-center bg-[#ff6a00] shadow-lg mb-40 mb-sm-25 animate get-bottom">
                                <svg height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m128 0v32h-128v192h112v-16h-88.632812l28.839843-41.199219c9.984375-14.28125 26.359375-22.800781 43.792969-22.800781s33.808594 8.519531 43.800781 22.800781l28.832031 41.199219h-40.632812v288h368v-496zm-88.902344 157.632812-23.097656 32.992188v-142.625h272v115.574219l-10.046875-32.148438c-9.609375-30.761719-37.722656-51.425781-69.953125-51.425781s-60.34375 20.664062-69.953125 51.433594l-2.742187 8.773437c-11.425782-7.839843-25.089844-12.207031-39.304688-12.207031-22.648438 0-43.921875 11.070312-56.902344 29.632812zm113.804688 0c-1.390625-1.992187-2.925782-3.855468-4.503906-5.671874l4.921874-15.753907c7.511719-24.046875 29.488282-40.207031 54.679688-40.207031s47.167969 16.160156 54.679688 40.199219l22.441406 71.800781h-96.953125zm327.097656 322.367188h-336v-256h160v-192h-160v-16h336zm0 0" /><path d="m160 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m224 464h48v-160h-48zm16-144h16v128h-16zm0 0" /><path d="m288 464h48v-128h-48zm16-112h16v96h-16zm0 0" /><path d="m352 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m416 464h48v-112h-48zm16-96h16v80h-16zm0 0" /><path d="m271.703125 266.902344c.121094-.957032.296875-1.910156.296875-2.902344 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 3.695312.902344 7.152344 2.40625 10.28125l-32.117188 32.117188c-3.136718-1.496094-6.59375-2.398438-10.289062-2.398438-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24c0-3.695312-.902344-7.152344-2.40625-10.28125l32.117188-32.117188c3.136718 1.496094 6.59375 2.398438 10.289062 2.398438 6.457031 0 12.296875-2.59375 16.617188-6.753906l23.679687 11.84375c-.121094.964844-.296875 1.910156-.296875 2.910156 0 13.230469 10.769531 24 24 24 6.457031 0 12.296875-2.59375 16.609375-6.742188l23.679687 11.839844c-.113281.957032-.289062 1.910156-.289062 2.902344 0 13.230469 10.769531 24 24 24 12.449219 0 22.585938-9.550781 23.769531-21.695312l20.246094-5.066407c4.296875 6.472657 11.648437 10.761719 19.984375 10.761719 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24c-12.449219 0-22.59375 9.558594-23.769531 21.703125l-20.238281 5.066406c-4.304688-6.480469-11.648438-10.769531-19.992188-10.769531-6.457031 0-12.296875 2.59375-16.617188 6.753906l-23.679687-11.84375c.121094-.964844.296875-1.910156.296875-2.910156 0-13.230469-10.769531-24-24-24-6.457031 0-12.296875 2.59375-16.609375 6.742188zm-87.703125 69.097656c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm64-64c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm192 32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64 16c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64-32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm0 0" /><path d="m392 272c39.695312 0 72-32.304688 72-72s-32.304688-72-72-72-72 32.304688-72 72 32.304688 72 72 72zm0-128c30.878906 0 56 25.121094 56 56s-25.121094 56-56 56-56-25.121094-56-56 25.121094-56 56-56zm0 0" /><path d="m320 32h144v16h-144zm0 0" /><path d="m320 64h144v16h-144zm0 0" /><path d="m448 96h16v16h-16zm0 0" /><path d="m320 96h112v16h-112zm0 0" /><path d="m56 64c-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24-10.769531-24-24-24zm0 32c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" /></svg>
                            </div>
                            <div className="card-two-content">
                                <div>
                                    <div className="card-title">
                                        <h3 className="text-2xl text-center font-bold py-7">{content[4].heading}</h3>
                                    </div>
                                    <p className="pb-6 app__text font-bold">{content[4].description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={items}>
                        <div className="single-feature-two gray-shape">
                            <div className="h2-feature-icon d-center bg-[#056C93] shadow-lg mb-40 mb-sm-25 animate get-bottom">
                                <svg height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m128 0v32h-128v192h112v-16h-88.632812l28.839843-41.199219c9.984375-14.28125 26.359375-22.800781 43.792969-22.800781s33.808594 8.519531 43.800781 22.800781l28.832031 41.199219h-40.632812v288h368v-496zm-88.902344 157.632812-23.097656 32.992188v-142.625h272v115.574219l-10.046875-32.148438c-9.609375-30.761719-37.722656-51.425781-69.953125-51.425781s-60.34375 20.664062-69.953125 51.433594l-2.742187 8.773437c-11.425782-7.839843-25.089844-12.207031-39.304688-12.207031-22.648438 0-43.921875 11.070312-56.902344 29.632812zm113.804688 0c-1.390625-1.992187-2.925782-3.855468-4.503906-5.671874l4.921874-15.753907c7.511719-24.046875 29.488282-40.207031 54.679688-40.207031s47.167969 16.160156 54.679688 40.199219l22.441406 71.800781h-96.953125zm327.097656 322.367188h-336v-256h160v-192h-160v-16h336zm0 0" /><path d="m160 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m224 464h48v-160h-48zm16-144h16v128h-16zm0 0" /><path d="m288 464h48v-128h-48zm16-112h16v96h-16zm0 0" /><path d="m352 464h48v-96h-48zm16-80h16v64h-16zm0 0" /><path d="m416 464h48v-112h-48zm16-96h16v80h-16zm0 0" /><path d="m271.703125 266.902344c.121094-.957032.296875-1.910156.296875-2.902344 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 3.695312.902344 7.152344 2.40625 10.28125l-32.117188 32.117188c-3.136718-1.496094-6.59375-2.398438-10.289062-2.398438-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24c0-3.695312-.902344-7.152344-2.40625-10.28125l32.117188-32.117188c3.136718 1.496094 6.59375 2.398438 10.289062 2.398438 6.457031 0 12.296875-2.59375 16.617188-6.753906l23.679687 11.84375c-.121094.964844-.296875 1.910156-.296875 2.910156 0 13.230469 10.769531 24 24 24 6.457031 0 12.296875-2.59375 16.609375-6.742188l23.679687 11.839844c-.113281.957032-.289062 1.910156-.289062 2.902344 0 13.230469 10.769531 24 24 24 12.449219 0 22.585938-9.550781 23.769531-21.695312l20.246094-5.066407c4.296875 6.472657 11.648437 10.761719 19.984375 10.761719 13.230469 0 24-10.769531 24-24s-10.769531-24-24-24c-12.449219 0-22.59375 9.558594-23.769531 21.703125l-20.238281 5.066406c-4.304688-6.480469-11.648438-10.769531-19.992188-10.769531-6.457031 0-12.296875 2.59375-16.617188 6.753906l-23.679687-11.84375c.121094-.964844.296875-1.910156.296875-2.910156 0-13.230469-10.769531-24-24-24-6.457031 0-12.296875 2.59375-16.609375 6.742188zm-87.703125 69.097656c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm64-64c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm192 32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64 16c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm-64-32c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8-8-3.585938-8-8 3.59375-8 8-8zm0 0" /><path d="m392 272c39.695312 0 72-32.304688 72-72s-32.304688-72-72-72-72 32.304688-72 72 32.304688 72 72 72zm0-128c30.878906 0 56 25.121094 56 56s-25.121094 56-56 56-56-25.121094-56-56 25.121094-56 56-56zm0 0" /><path d="m320 32h144v16h-144zm0 0" /><path d="m320 64h144v16h-144zm0 0" /><path d="m448 96h16v16h-16zm0 0" /><path d="m320 96h112v16h-112zm0 0" /><path d="m56 64c-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24-10.769531-24-24-24zm0 32c-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8-3.59375 8-8 8zm0 0" /></svg>
                            </div>
                            <div className="card-two-content">
                                <div>
                                    <div className="card-title">
                                        <h3 className="text-2xl text-center font-bold py-7">{content[5].heading}</h3>
                                    </div>
                                    <p className="pb-6 app__text font-bold">{content[5].description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Feature2;
