"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useForm } from 'react-hook-form';

import { FormField } from '@/lib/types';
import FormBuilder from '@/components/forminputs/FormBuilder';

function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: FormField) => {
      console.log(data);
    };

    const formFields: FormField[] = [
        {
          type: 'input',
          name: 'firstName',
          label: 'First Name',
          placeholder: 'Enter your first name',
          control: control,
          rules: { required: 'First name is required' },
          error: errors.firstName,
        },
        {
          type: 'input',
          name: 'lastName',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          control: control,
          rules: { required: 'Last name is required' },
          error: errors.lastName,
        },
        {
          type: 'input',
          name: 'email',
          label: 'Email',
          placeholder: 'Enter your email',
          control: control,
          rules: { required: 'Last name is required' },
          error: errors.lastName,
        },
        {
          type: 'input',
          name: 'phone',
          label: 'Phone Number',
          placeholder: 'Enter your email',
          control: control,
          rules: { required: 'Last name is required' },
          error: errors.lastName,
        },
        {
          type: 'input',
          name: 'storename',
          label: 'Store Name',
          placeholder: 'Enter your email',
          control: control,
          rules: { required: 'Last name is required' },
          error: errors.lastName,
        },
        {
          type: 'input',
          name: 'password',
          label: 'Password',
          placeholder: 'Enter your email',
          control: control,
          rules: { required: 'Last name is required' },
          error: errors.lastName,
        },
       
       
      ];


	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-4xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Left Section */}
				<div className="flex flex-col justify-center items-center md:items-start text-center md:text-left bg-gray-50 p-6">
					<Image
						width={800}
						height={800}
						src="/path/to/illustration.svg"
						alt="Illustration"
						className="w-full  md:mx-0"
					/>
					<h1 className="text-2xl font-semibold mt-6">
						Discover the perfect fit with Stitch
					</h1>
				</div>

				{/* Right Section: Form */}
				<div className="bg-white p-8 shadow-lg rounded-lg">
					<div className="mb-6">
						<Button className="px-4 py-2 bg-primary text-white hover:bg-primary rounded-md">
							Designer
						</Button>
						<Button className="px-4 py-2 bg-white text-text border border-text-100 rounded-md ml-2">
							User
						</Button>
					</div>

                    <form onSubmit={handleSubmit(onSubmit)}>
      <FormBuilder fields={formFields} />
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
   </form>
				</div>
			</div>
		</div>
	);
}

export default SignUp;

{/* <form>
	<div className="grid grid-cols-2 gap-4">
		<div className="col-span-1">
			<label
				htmlFor="first-name"
				className="block text-sm font-medium text-gray-700"
			>
				First name
			</label>
			<input
				type="text"
				id="first-name"
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
			/>
		</div>
		<div className="col-span-1">
			<label
				htmlFor="last-name"
				className="block text-sm font-medium text-gray-700"
			>
				Last name
			</label>
			<input
				type="text"
				id="last-name"
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
			/>
		</div>
	</div>
	<div className="mt-4">
		<label
			htmlFor="email"
			className="block text-sm font-medium text-gray-700"
		>
			Email
		</label>
		<input
			type="email"
			id="email"
			className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
		/>
	</div>
	<div className="mt-4">
		<label
			htmlFor="phone"
			className="block text-sm font-medium text-gray-700"
		>
			Phone
		</label>
		<input
			type="text"
			id="phone"
			className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
		/>
	</div>
	<div className="mt-4">
		<label
			htmlFor="store-name"
			className="block text-sm font-medium text-gray-700"
		>
			Store Name
		</label>
		<input
			type="text"
			id="store-name"
			className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
		/>
	</div>
	<div className="mt-4">
		<label
			htmlFor="location"
			className="block text-sm font-medium text-gray-700"
		>
			Address/Location
		</label>
		<input
			type="text"
			id="location"
			className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
		/>
	</div>
	<div className="mt-4">
		<label
			htmlFor="password"
			className="block text-sm font-medium text-gray-700"
		>
			Password
		</label>
		<input
			type="password"
			id="password"
			className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
		/>
	</div>
	<div className="flex items-center mt-4">
		<input
			id="terms"
			name="terms"
			type="checkbox"
			className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
		/>
		<label
			htmlFor="terms"
			className="ml-2 block text-sm text-gray-900"
		>
			By creating an account, I agree to the{" "}
			<a
				href="#"
				className="text-indigo-600"
			>
				Terms of use
			</a>{" "}
			and{" "}
			<a
				href="#"
				className="text-indigo-600"
			>
				Privacy Policy
			</a>
		</label>
	</div>
	<div className="mt-6">
		<button
			type="submit"
			className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700"
		>
			Sign up
		</button>
	</div>
	<div className="mt-4 text-center">
		<p className="text-sm">
			Already have an account?{" "}
			<a
				href="#"
				className="text-indigo-600"
			>
				Log in
			</a>
		</p>
	</div>
</form>; */}

// import React from 'react';


// const MyFormComponent = () => {




//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <FormBuilder fields={formFields} />
//       <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default MyFormComponent;
