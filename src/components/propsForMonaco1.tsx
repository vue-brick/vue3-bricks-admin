import {defineComponent, PropType} from 'vue';
import MonacoEditor from "./MonacoEditor"
import {createUseStyles} from 'vue-jss'

const useStyles = createUseStyles({

    codePanel: {
        height:'100%',
        marginBottom: 10,
        marginTop: 20,
        padding: 10,
        minHeight:850
    }

})
export default defineComponent({
    name: 'Monaco',
    components: {
        MonacoEditor
    },
    props: {
        code: {
            type: String as PropType<string>,
            default: '',
            required: true
        },
        onChange: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const classesRef = useStyles()
        const onChangeVal = (value: any) => {
            props.onChange(value)
        }
        return () => {
            const classes = classesRef.value
            return (
                <div>
                    <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title={"属性编辑器"}
                        avatar={{src:'https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg'}}
                        sub-title="编辑属性,实时预览组件状态"
                    >
                    </a-page-header>
                    <MonacoEditor
                        code={props.code}
                        class={classes.codePanel}
                        onChange={(value: any) => {
                            onChangeVal(value)
                        }}
                        title="Schema"
                    />
                </div>
            )
        }

    }

});



