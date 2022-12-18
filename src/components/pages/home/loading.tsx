import { ModalCarts } from "../../styles/modals"
import loading from "../../assets/Ellipsis-0.9s-207px.svg"

export const Loading = ()=>{

    return(
        <ModalCarts>
            <img src={loading} alt="loading da pagina" width="10%" />
        </ModalCarts>
    )
}