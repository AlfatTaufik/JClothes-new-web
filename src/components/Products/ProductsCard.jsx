import Button from '../Shared/Button'

const ProductsCard = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {/* card */}
            {data.map((data) => (
                <div className='group' key={data.id}>
                    <div className='relative '>
                        <img src={"http://localhost:8000/assets/img/product/"+data.gambar} alt="" className='h-[180px] w-[260px] object-cover rounded-md'/>
                        <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center
                        group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full'>
                            <Button text={"Add To Cart"} bgColor={"bg-primary"} textColor={"text-white"}/>
                        </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.nama_barang}</h2>
                        <h2 className='font-bold'>Price : {data.keterangan}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductsCard