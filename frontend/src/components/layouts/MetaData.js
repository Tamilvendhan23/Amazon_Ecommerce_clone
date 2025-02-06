import { Helmet } from "react-helmet-async"

export default function MetaData({title}) {
    return (
        <Helmet>
            <title>{`${title} - JVLcart`}</title>  
            {/* for create the title ,from different component ,that pass the value */}
        </Helmet>
    )
}