import Image from "next/image";
import Trash from '../../components/icons/trash'
import { CartProductPrice } from "../AppContext";

export default function CartProduct({product, onremove}) {
    return (
        <div className="flex gap-4 mb-2 border-b py-2 items-center">
                            <div className="w-24">
                                {/* <Image width={240} height={240} src={product.image} alt={"pizza"}/> */}
                            </div>
                            <div className="grow">
                                <h3 className="font-semibold">
                                    {product.name}
                                </h3>
                                {product.size && (
                                    <div className="text-sm">Size: <span>{product.size.name}</span></div>
                                )}
                                {product.extras?.length > 0 && (
                                    <div className="text-sm text-gray-500"> 
                                        {product.extras.map(extra => (
                                            <div>{extra.name} ${extra.price}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="text-lg font-semibold">
                                ${CartProductPrice(product)}
                            </div>
                                {!!onremove && (
                                <div className="ml-2">
                                    <button type="button" onClick={() => onremove(index)} className="p-2">
                                        <Trash />
                                    </button>
                                </div>
                                )}
                        </div>
    )
}