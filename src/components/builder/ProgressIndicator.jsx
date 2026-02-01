function ProgressIndicator({ step, totalSteps }) {
  const width = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-6">
      <div className="w-full h-1 bg-gray-200 rounded-full">
        <div
          className="h-1 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Step {step} of {totalSteps}
      </p>
    </div>
  );
}

export default ProgressIndicator;
