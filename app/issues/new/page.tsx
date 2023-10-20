'use client';
import { Button, Callout, TextField, Text } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useErrStore, useIsSubmit } from '@/utils/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/utils/velidationSchema';
import { z } from 'zod';
import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const { error, setError } = useErrStore();
  const { isSubmit, setIsSubmit } = useIsSubmit();

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setIsSubmit(true);
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (e) {
            setIsSubmit(false);
            setError('An unexpected error occurred!');
          }
        })}
      >
        <TextField.Root>
          <TextField.Input
            placeholder="Title"
            {...register('title')}
          ></TextField.Input>
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field}></SimpleMDE>
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmit}>
          Submit New Issue
          {isSubmit && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
