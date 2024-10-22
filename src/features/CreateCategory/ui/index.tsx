import { Button } from '@/shared/components/Button';
import { FormField } from '@/shared/components/FormField/ui';
import { Modal } from '@/shared/components/Modal';

import { useCreateCategory } from '../hooks/useCreateCategory';
import {
	StyledCreateCategoryForm,
	StyledCreateCategoryRow,
	StyledCreateCategoryTitle,
	StyledCreateCategoryWrapper,
} from './styled';

export const CreateCategory = () => {
	const {
		isShowCreateCategoryForm,
		handleShowCreateCategoryForm,
		handleCloseCreateCategoryForm,
		categoryName,
		setCategoryName,
		onSubmit,
		isLoading,
	} = useCreateCategory();
	return (
		<StyledCreateCategoryWrapper>
			<Button name="Create category" onClick={handleShowCreateCategoryForm} variant="success" />
			{isShowCreateCategoryForm && (
				<Modal onClose={handleCloseCreateCategoryForm}>
					<StyledCreateCategoryTitle>Create category</StyledCreateCategoryTitle>
					<StyledCreateCategoryForm onSubmit={onSubmit}>
						<StyledCreateCategoryRow>
							<FormField
								loading={isLoading}
								placeholder="Category name"
								type="text"
								onChange={setCategoryName}
								value={categoryName}
							/>
						</StyledCreateCategoryRow>
						<Button
							name="Create"
							fullWidth
							onClick={onSubmit}
							type="submit"
							disabled={isLoading}
							loading={isLoading}
						/>
					</StyledCreateCategoryForm>
				</Modal>
			)}
		</StyledCreateCategoryWrapper>
	);
};
