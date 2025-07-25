"use client"

export default function Success() {
    return (
        <div className="text-center py-8">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600">Your action was completed successfully.</p>
        </div>
    );
}