import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { asyncCreateProduct } from "../../store/actions/productActions"

const CreateProduct = () => {
 const dispatch = useDispatch()
  const Navigate = useNavigate()
  const SubmitHandler = (product) => {
    // Set default values for optional fields
    const productWithDefaults = {
      ...product,
      id: nanoid(),
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
    }
    
    reset()
    console.log(productWithDefaults)
    dispatch(asyncCreateProduct(productWithDefaults))
    Navigate('/products')
  }

  const {register, watch, reset, handleSubmit, formState: { errors }} = useForm();
  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5 p-4">
            <img
        className="w-[150px]"
        src="/assets/fox-border.png"
        alt=""
      />
      <h1 className="text-xl font-medium text-center">Create Your Profile</h1>
    <form 
  onSubmit={handleSubmit(SubmitHandler)} 
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
    <div>
      <input 
        {...register('productName', {
          required: "Title is required",
          setValueAs: v => v || ""
        })} 
        type="text" 
        placeholder="Enter Your title here"
        className={`border p-2 rounded-lg w-full ${errors.productName ? 'border-red-500' : ''}`}
      />
      {errors.productName && (
        <p className="text-red-500 text-sm mt-1">{errors.productName.message}</p>
      )}
    </div>
    <input 
      {...register('owner', { 
        setValueAs: v => v || ""
      })} 
      type="text" 
      placeholder="John Doe"
      className="border p-2 rounded-lg w-full"
    />
  </div>

  {/* Row 2: Date + Price */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input 
      {...register('date', {
        setValueAs: v => v || new Date().toISOString().split('T')[0]
      })} 
      type="date" 
      className="border p-2 rounded-lg w-full"
    />
    <input 
      {...register('price', { 
        valueAsNumber: true,
        setValueAs: v => v || 0.00
      })} 
      type="number" 
      step="0.01"
      placeholder="00.00 INR" 
      className="border p-2 rounded-lg w-full"
    />
  </div>

  {/* Row 3: File Type + File Upload (url-based) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <select 
      {...register('fileType', {
        setValueAs: v => v || ""
      })} 
      className="border p-2 rounded-lg w-full"
    >
      <option value="">Select</option>
      <option value="pdf">PDF</option>
      <option value="docx">DOCX</option>
      <option value="zip">ZIP</option>
    </select>
    <div>
      <input 
        {...register('fileUrl', {
          required: "File URL is required",
          setValueAs: v => v || ""
        })} 
        type="url" 
        placeholder="Paste file URL"
        className={`border p-2 rounded-lg w-full ${errors.fileUrl ? 'border-red-500' : ''}`}
      />
      {errors.fileUrl && (
        <p className="text-red-500 text-sm mt-1">{errors.fileUrl.message}</p>
      )}
    </div>
  </div>

  {/* Row 4: Description */}
  <textarea 
    {...register('productDescription', {
      setValueAs: v => v || ""
    })} 
    placeholder="Write a short description about your product"
    className="border p-2 rounded-lg w-full resize-none h-24"
  />

  {/* Row 5: Visibility + Alert Message */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
    <div className="flex items-center gap-2">
      <select 
        {...register('visibility', {
          setValueAs: v => v || "Public"
        })} 
        className="border p-2 rounded-lg"
      >
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>
      <label className="flex items-center gap-2">
        <input 
          {...register('addAlert', {
            setValueAs: v => v || false
          })} 
          type="checkbox" 
          className="accent-pink-600"
        />
        Add Alert Message
      </label>
    </div>
    <input 
      {...register('alertMessage', {
        setValueAs: v => v || ""
      })} 
      type="text" 
      placeholder='Write your alert here like "Only few left | top in sales"'
      className="border p-2 rounded-lg w-full"
    />
  </div>

  {/* Image URL Preview Input */}
  <input 
    {...register('imageUrl', {
      setValueAs: v => v || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pI20UCe27fIpxl4iY03HqCqT2e3E6JiFRQ&sz"
    })} 
    type="url" 
    placeholder="Image URL (used above)"
    className="border p-2 rounded-lg w-full"
  />

  {/* Submit Button */}
  <button 
    type="submit" 
    className="bg-[#BF40BF] text-white py-2 px-5 rounded-lg w-full"
  >
    Create Product
  </button>
</form>

    </div>
  )
}

export default CreateProduct
