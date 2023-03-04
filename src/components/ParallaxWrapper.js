/* eslint-disable */
import { React, Fragment } from "react"

function ParallaxWrapper(JSXElement, weight){
    return class extends React.Component{
        constructor(props) {
            super(props)
            
            this.state = {
                start_postition: null,
                ease: 0.05,
                WrapperJSXElement: <Fragment></Fragment>
            }
        }

        componentDidMount (){
            this.last_offset = 0;
            this.animation_running = false;
            this.wrappedJSXElement = null;

            const ref = React.createRef();

            const JSXElementWithRef = React.cloneElement(
                JSXElement,
                {...JSXElement.props, ref: ref}
            )

            this.setState({
                ease: weight,
                WrappedJSXElement: JSXElementWithRef
            }, () => {

                this.setState({start_postition: ref.current.offsetTop}, () => {
                    this.wrappedJSXElement = ref,
                    document.addEventListener('scroll', this.animate_scroll);
                });
            });
        }

        animate_scroll = () =>{
            if (!this.animation_running){
                this.animation_running = true;
                requestAnimationFrame(this.animation_loop);
            }
        }

        animation_loop = () => {
            let current_offset = window.pageYOffset;
            let difference = current_offset - this.last_offset;
            difference += this.state.ease;
            //exit logic
            if (Math.abs(difference) < 0.05){
                this.last_offset = current_offset;
                this.animation_running = false;

                return;
            }
            this.wrappedJSXElement.current.style.top  =`${this.setState.start_postition - this.last_offset}px`

            this.last_offset += difference;

            requestAnimationFrame(this.animation_loop);
        }

        render(){
            return(
                <Fragment>
                    {this.state.WrapperJSXElement}
                </Fragment>
            )
        }
    }
}

export default ParallaxWrapper;