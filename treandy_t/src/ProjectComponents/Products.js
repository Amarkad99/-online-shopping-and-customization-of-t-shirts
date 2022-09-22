import ProductForm from "./ProductForm";

export default function Products(props) {

    const {addOrEdit}=props;
    return(
        <ProductForm addOrEdit={addOrEdit}></ProductForm>
    )
}