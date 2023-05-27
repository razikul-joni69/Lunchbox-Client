const FoodsGallery = () => {
    return (
        <div className="container mx-auto my-20">
            <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl mb-5">
                Foods Gallery
            </h2>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2020/02/GRT-140628-20_Filling_Foods_That_Actually_Taste_Good-1296x728-header.jpg?w=1155&h=1528"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://blog.nasm.org/hubfs/healthy-fats-foods.jpg"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/boston-foods-phpvjFhsw"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://img.freepik.com/free-photo/assortment-common-food-allergens-people_23-2149870557.jpg"
                    alt=""
                />
                <img
                    className="w-full h-52 border-4 border-sky-600"
                    src="https://hips.hearstapps.com/hmg-prod/images/breakfast-cereal-meal-granola-with-milk-pomegranate-royalty-free-image-1638397250.jpg?crop=1.00xw:0.753xh;0,0.120xh&resize=1200:*"
                    alt=""
                />
            </div>
        </div>
    );
};

export default FoodsGallery;
