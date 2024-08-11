"use client"
import { Button, Form, Input } from 'antd';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

// export const metadata: Metadata = {
//     title: "Register - Window Shopping BD",
//     description: "Your Desired Online Shopping Place",
// };

const Register = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                        Create Your Account
                    </h2>
                    <Form
                        name="register"
                        // onFinish={onFinish}
                        layout="vertical"
                        className="space-y-4"
                    >
                        <Form.Item
                            name="fullName"
                            label="Full Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your full name',
                                },
                            ]}
                        >
                            <Input placeholder="Enter your full name" />
                        </Form.Item>
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
                                {
                                    min: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('The two passwords do not match!')
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm your password" />
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full mb-4"
                        >
                            Register
                        </Button>
                    </Form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="text-blue-500 hover:text-blue-800">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register