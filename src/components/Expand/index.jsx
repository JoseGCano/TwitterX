import { PrimaryButton } from "../PrimaryButton"



export const Expand = ({children, state, setState})=>{



    return (
        <div>
        {!state ? <PrimaryButton title={"expand"} fill action={()=>setState(!state)}/> : null}
            {state ? children: null}
        </div>
    )

}