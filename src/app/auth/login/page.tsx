"use client"
import { Button, Form, Input } from 'antd'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

// export const metadata: Metadata = {
//     title: "Login - Window Shopping BD",
//     description: "Your Desired Online Shopping Place",
// };

const Login = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                        Login to Your Account
                    </h2>
                    <Form
                        name="login"
                        // onFinish={onFinish}
                        layout="vertical"
                        className="space-y-4"
                    >
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your email address',
                                },
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email address',
                                },
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your password',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full md:w-auto mb-4 md:mb-0"
                            >
                                Sign In
                            </Button>
                            <Link href="/forgot-password" className="w-full md:w-auto text-center text-blue-500 hover:text-blue-800">
                                Forgot Password?
                            </Link>
                        </div>
                    </Form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don&apos;t have an account?{' '}
                            <Link href="/auth/register" className="text-blue-500 hover:text-blue-800">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login