import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncUpdateProduct } from '../../store/actions/productActions';
import { useEffect } from 'react';


const UpdateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const {id}=useParams()
  const product = products.find((e)=>e.id === id)
  console.log(product)
  const {register,watch,reset, handleSubmit} = useForm({
    
  });
    useEffect(() => {
    if (product) {
      reset({
        id: product.id,
        productName: product.productName || "",
        owner: product.owner || "",
        date: product.date || new Date().toISOString().split('T')[0],
        price: product.price || 0.00,
        fileType: product.fileType || "",
        fileUrl: product.fileUrl || "",
        productDescription: product.productDescription || "",
        visibility: product.visibility || "Public",
        addAlert: product.addAlert || false,
        alertMessage: product.alertMessage || "",
        imageUrl: product.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pI20UCe27fIpxl4iY03HqCqT2e3E6JiFRQ&sz"
      });
    }
  }, [product, reset]);
  console.log(product)
  const UpdateHandler = (product) => {
   dispatch(asyncUpdateProduct(product))
  }

  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5 p-4">
    <img
      className="w-[150px]"
      src="/assets/fox-border.png"
      alt=""
    />
    <h1 className="text-xl font-medium text-center">Update Product</h1>
    <form 
      onSubmit={handleSubmit(UpdateHandler)} 
      className="bg-white rounded-xl p-6 w-full space-y-6"
    >
    {/* Image preview */}
    <div className="flex justify-center">
    <img
    src={watch('imageUrl') || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pI20UCe27fIpxl4iY03HqCqT2e3E6JiFRQ&sz"}
    alt="Preview"
    className="h-24 w-24 object-cover rounded-full border-2 border-gray-300"
    />
    </div>

    {/* Row 1: Title + Owner Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input 
    {...register('productName')} 
    type="text" 
    placeholder="Enter Your title here"
    className="border p-2 rounded-lg w-full"
    />
    <input 
    {...register('owner', { required: true })} 
    type="text" 
    placeholder="John Doe"
    className="border p-2 rounded-lg w-full"
    />
    </div>

    {/* Row 2: Date + Price */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input 
    {...register('date')} 
    type="date" 
    className="border p-2 rounded-lg w-full"
    />
    <input 
    {...register('price', { valueAsNumber: true })} 
    type="number" 
    step="0.01"
    placeholder="00.00 INR" 
    className="border p-2 rounded-lg w-full"
    />
    </div>

    {/* Row 3: File Type + File Upload (url-based) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <select 
    {...register('fileType')} 
    className="border p-2 rounded-lg w-full"
    >
    <option value="">Select</option>
    <option value="pdf">PDF</option>
    <option value="docx">DOCX</option>
    <option value="zip">ZIP</option>
    </select>
    <input 
    {...register('fileUrl')} 
    type="url" 
    placeholder="Paste file URL"
    className="border p-2 rounded-lg w-full"
    />
    </div>

    {/* Row 4: Description */}
    <textarea 
    {...register('productDescription')} 
    placeholder="Write a short description about your product"
    className="border p-2 rounded-lg w-full resize-none h-24"
    />

    {/* Row 5: Visibility + Alert Message */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
    <div className="flex items-center gap-2">
    <select 
    {...register('visibility')} 
    className="border p-2 rounded-lg"
    >
    <option value="Public">Public</option>
    <option value="Private">Private</option>
    </select>
    <label className="flex items-center gap-2">
    <input 
      {...register('addAlert')} 
      type="checkbox" 
      className="accent-pink-600"
    />
    Add Alert Message
    </label>
    </div>
    <input 
    {...register('alertMessage')} 
    type="text" 
    placeholder='Write your alert here like "Only few left | top in sales"'
    className="border p-2 rounded-lg w-full"
    />
    </div>

    {/* Image URL Preview Input */}
    <input 
    {...register('imageUrl')} 
    type="url" 
    placeholder="Image URL (used above)"
    className="border p-2 rounded-lg w-full"
    />

    {/* Submit Button */}
    <button 
    type="submit" 
    className="bg-[#BF40BF] text-white py-2 px-5 rounded-lg w-full"
    >
    Update Product
    </button>
    </form>

    </div>
  )
}

export default UpdateProduct
